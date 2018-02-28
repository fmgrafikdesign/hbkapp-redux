var m = require('mithril');
var StateLectures = require('../../models/StateLectures');
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
        var isfavorite = StateLectures.isFavorite(lecture.id);
        if(!lecture) return;

        var prefix = '/vorlesungen/';

        if(vnode.attrs.isMyLectures) {
            prefix = '/meine-vorlesungen/'
        }

        return m('a', {
            href: prefix + lecture.id ,
            class: 'list-item' + ((parseInt(vnode.attrs.lid) === lecture.id) ? ' active-lecture' : '') + (isfavorite ? ' favorite' : ''),
            oncreate: m.route.link,
            onupdate: m.route.link,
            id: lecture.id,
            onclick: function () {
                //StateLectures.setActive(lecture.id);
                document.getElementById('split-view-controller').classList.add('second-screen');
                StateLectures.state.secondScreen = true;
            }
        }, [
            (isfavorite && !vnode.attrs.isMyLectures) ? m('.list-item-favorite-icon.icon.ion-android-star') : '',
            m('.list-item-header', [
                m('h2.list-item-title', lecture.titel),
                m('p.list-item-subtitle', lecture.untertitel),
                m('hr.list-item-divider')
            ]),

            m('p.list-item-quick-info', lecture.profs.join(', ') + ' | ' + lecture.typ.join(', ')),
            m('p.list-item-text-intro', lecture.excerpt || placeholder)
        ]);
    }
};