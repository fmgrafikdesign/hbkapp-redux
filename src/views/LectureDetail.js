var m = require('mithril');
var StateLectures = require('../models/StateLectures');
var LectureSingleCard = require('./LectureSingleCard');

var activeLecture = {
    view: function (vnode) {
//        if(vnode.attrs.lid) {
//            StateLectures.setActive(vnode.attrs.lid);
        //}
        //console.log(StateLectures.activeLectureID);
        //console.log(StateLectures.activeLecture);
        var lecture = StateLectures.getLecture(vnode.attrs.lid);

        return m(LectureSingleCard, {lecture: lecture});
    }
};

var singlenav = {
    view: function (vnode) {
        return m('.single-nav', [
            // Back button
            m('a.hide-desktop.single-nav-back-button', {href: '/vorlesungen', oncreate: m.route.link}, m('i.icon.ion-android-arrow-back')),
            m('a.single-nav-fav-button', {
                    onclick: function () {
                        // TODO Actual functionality
                        console.log('Vorlesung ' + vnode.attrs.lid + ' ist jetzt favorisiert!')
                    }
                }, m('i.icon.ion-android-star-outline')
            )

        ]);
    }
};

module.exports = {
    view: function (vnode) {
        return m('.parent-height.info-box.align-self-center', [
            m(singlenav, {lid: vnode.attrs.lid}),
            m(activeLecture, {lid: vnode.attrs.lid})
        ]);
    }
}

