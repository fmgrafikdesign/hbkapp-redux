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
            class: 'list-item' + ((parseInt(vnode.attrs.lid) === parseInt(lecture.id)) ? ' active-lecture' : '') + (isfavorite ? ' favorite' : ''),
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

            m('p.list-item-quick-info', lecture.profs.join(', ') + ' | ' + lecture.typ.join(', ') + (lecture.cp.length > 0 ? (' (' + lecture.cp.join(', ') + ')') : '')),
            m('p.list-item-text-intro', m.trust(lecture.excerpt + (lecture.excerpt.length === lecture.fulltext.length ? '' : '...')))
        ]);
    }
};