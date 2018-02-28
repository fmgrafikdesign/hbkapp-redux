var m = require('mithril');

/*

[titel]
[untertitel]

[dozent]

typ (cp) für studiengänge:
[studiengänge]

datum [start] [ende] [ist blockveranstaltung]

Zeittabelle

[location]

[cp] durch [leistung]

[text]

[anmeldeverfahren]
[frist]
[beschränkung]

 */

module.exports = {
    view: function(vnode) {
        var lecture = vnode.attrs.lecture;
        if(!lecture) return;

        var datum_sonstiges = lecture.datum_sonstiges.length === 0 ? '' : ' | ' + lecture.datum_sonstiges ;
        var anmeldeverfahren = lecture.anmeldeverfahren;

        var regex = /(["'>:]?)([\w.-]+@[\w.-]+\.[\w.-]+)/gi;
        if (anmeldeverfahren.indexOf('@') >= 0) {
            anmeldeverfahren = anmeldeverfahren.replace(regex, function($0, $1) {
                return $1 ? $0 : '<a href="mailto:' + $0 + '">' + $0 + '</a>';
            })

        }

        var beschraenkung = lecture.beschraenkung;

        var wochentage = ['Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag','Sonntag'];
        //var table_head = '<tr><th>Montag</th><th>Dienstag</th><th>Mittwoch</th><th>Donnerstag</th><th>Freitag</th><th>Samstag</th><th>Sonntag</th></tr>';

        var table_body = '<tr class="tr-timetable">';
        lecture.dates.forEach(function(date, i) {
            if(date) {
                table_body += '<td class="date-'+i+'"><strong>' + wochentage[i] + '<span class="hide-desktop">: </span></strong><span class="hide-desktop"> ' + date + '</span><span class="hide-mobile"><br>' + date + '</span></td>';
            } else {
                table_body += '<td class="date-'+i+' hide-mobile"><strong>' + wochentage[i] + '</strong><br> </td>';
            }
        });

        table_body = table_body + '</tr>';

        //var table = table_head + table_body;
        table = table_body;

        /* Text processing */

        var textsections = lecture.fulltext.split(/\r?\n/);

        var fulltext = [];

        textsections.forEach(function(text) {
            fulltext.push(m('p', text));
        });

        var fulltext_object = m('p.list-item-text', fulltext);


        return m('.list-item.single-lecture ' , [
            m('.list-item-header', [
                m('h2.list-item-title', lecture.titel),
                m('p.list-item-subtitle', lecture.untertitel),
                m('hr.list-item-divider')
            ] ),

            // Who does it
            m('p.list-item-quick-info', [ m('i.icon.ion-person'), ' ' + lecture.profs.join(', ')]),
            m('hr.list-item-area-divider'),

            // Allowed studies
            m('p.list-item-studies', m.trust(lecture.typ.join(', ') + ' für Studiengänge:<br>' + lecture.fachrichtung.join(', '))),
            m('hr.list-item-area-divider'),

            // Date information
            m('p.list-item-dates',  [m('i.icon.ion-calendar'), ' Beginn: ' + lecture.datum_anfang + ' | Ende: ' + lecture.datum_ende + datum_sonstiges]),
            // Time information
            m('table.list-item-times', m.trust(table)),
            m('hr.list-item-area-divider'),


            // Location information
            m('p.list-item-location', [m('i.icon.ion-location'), ' ' + lecture.orte.join(', ')]),
            m('hr.list-item-area-divider'),

            // How many cp and how to get them
            m('p.list-item-proof', lecture.cp + ' CP durch: ' + lecture.leistungskontrolle.join(', ')),
            m('hr.list-item-area-divider'),

            // Text
            fulltext_object,
            m('hr.list-item-area-divider'),

            // How to apply
            lecture.anmeldeverfahren !== '' ? (m('p.list-item-apply-method', [m('i.icon.ion-checkmark'), m.trust(' ' + anmeldeverfahren)])) : '',

            lecture.weblink !== '' ? m('p.list-item-weblink', [m('i.icon.ion-earth'), m.trust(' Weblink: ' + linkify(lecture.weblink))]) : '',

            // Apply until when
            lecture.anmeldefrist !== '' ? (m('p.list-item-deadline', [m('i.icon.ion-ios-timer-outline'), ' Anmeldefrist: ' + lecture.anmeldefrist.replace('bis zum:', '')])) : '',

            // Any restrictions
            m('p.list-item-restriction', [m('i.icon.ion-alert-circled'), ' Beschränkung: ' + lecture.beschraenkung])
        ]);
    }
};

function linkify(inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
}