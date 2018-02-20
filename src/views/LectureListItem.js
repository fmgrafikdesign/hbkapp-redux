var m = require('mithril');
var StateLectures = require('../models/StateLectures');
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
    view: function (vnode) {
        var lecture = vnode.attrs.lecture;
        return m('a', {
            href: '/vorlesungen/' + lecture.id ,
            class: 'lecture-list-item' + ((parseInt(vnode.attrs.lid) === lecture.id) ? ' active-lecture' : ''),
            oncreate: m.route.link,
            id: lecture.id, onclick: function () {
                //StateLectures.setActive(lecture.id);
                document.getElementById('split-view-controller').classList.add('second-screen');
                StateLectures.state.secondScreen = true;
            }
        }, [
            m('.lecture-list-item-header', [
                m('h2.lecture-list-item-title', lecture.titel),
                m('p.lecture-list-item-subtitle', lecture.untertitel),
                m('hr.lecture-list-item-divider')
            ]),

            m('p.lecture-list-item-quick-info', lecture.profs.join(', ') + ' | ' + lecture.typ),
            m('p.lecture-list-item-text-intro', lecture.excerpt || placeholder)
        ]);
    }
};