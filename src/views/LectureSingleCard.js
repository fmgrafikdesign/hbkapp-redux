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

        if (anmeldeverfahren.indexOf('a') >= 0) {
            // RegEx Hax

        }


        return m('.lecture-list-item.single-lecture ' , [
            m('.lecture-list-item-header', [
                m('h2.lecture-list-item-title', lecture.titel),
                m('p.lecture-list-item-subtitle', lecture.untertitel),
                m('hr.lecture-list-item-divider')
            ] ),

            // What and by whom
            m('p.lecture-list-item-quick-info', lecture.profs.join(', ') + ' | ' + lecture.typ),
            m('hr.lecture-list-item-area-divider'),

            // Allowed studies
            m('p.lecture-list-item-studies', 'Studiengänge:\n' + lecture.fachrichtung.join(', ')),
            m('hr.lecture-list-item-area-divider'),
            // Date information
            m('p.lecture-list-item-dates', 'Beginn: ' + lecture.datum_anfang + ' | Ende: ' + lecture.datum_ende + datum_sonstiges),
            m('hr.lecture-list-item-area-divider'),
            // How many cp and how to get them
            m('p.lecture-list-item-proof', lecture.cp + ' CP durch: ' + lecture.leistungskontrolle.join(', ')),
            m('hr.lecture-list-item-area-divider'),
            // Text
            m('p.lecture-list-item-text', lecture.fulltext),
            m('hr.lecture-list-item-area-divider'),

            // How to apply
            m('p.lecture-list-item-apply-method', lecture.anmeldeverfahren),

            // Apply until when
            m('p.lecture-list-item-deadline', 'Anmeldefrist: ' + lecture.anmeldefrist.replace('bis zum:', '')),

            // Any restrictions
        ]);
    }
};