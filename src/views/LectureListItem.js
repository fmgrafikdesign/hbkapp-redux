var m = require('mithril');

/*

[titel]
[untertitel]

[dozent]

[typ][cp] durch [leistung]

datum [start] [ende] [ist blockveranstaltung]

[text-ausschnitt]


 */

var placeholder = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lore";

module.exports = {
    view: function(vnode) {
        var lecture = vnode.attrs.lecture;
        return m('.lecture-list-item', {id: lecture.id} , [
            m('.lecture-list-item-header', [
                m('h2.lecture-list-item-title', lecture.titel),
                m('p.lecture-list-item-subtitle', lecture.untertitel),
                m('hr.lecture-list-item-divider')
            ] ),

            m('p.lecture-list-item-quick-info', lecture.profs + ' | ' + lecture.typ),
            m('p.lecture-list-item-text-intro', lecture.excerpt || placeholder)
        ]);
    }
};