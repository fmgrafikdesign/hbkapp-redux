var m = require('mithril');
var StateLectures = require('../models/StateLectures');
var LectureSingleCard = require('./LectureSingleCard');
var firebase = require('../models/StateFirebase');
var StateUser = require('../models/StateUser');

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

        if(!vnode.attrs.lid) return;

        var isFavorite = StateLectures.isFavorite(vnode.attrs.lid);
        return m('.single-nav', [
            // Back button
            m('a.hide-desktop.single-nav-back-button', {href: '/vorlesungen', oncreate: m.route.link}, m('i.icon.ion-android-arrow-back')),
            m('a.single-nav-fav-button', {
                    onclick: function () {
                        // TODO Actual functionality
                        var lid = vnode.attrs.lid;

                        var element = this;
                        element.classList.add('clicked');
                        setTimeout(function() {
                            element.classList.remove('clicked');
                        }, 400);

                        if(isFavorite) {
                            firebase.database.ref('/users/' + StateUser.uid + '/favorites/' + lid).remove().then(function(result) {
                                console.log('Vorlesung ' + lid + ' ist nicht mehr favorisiert!');
                                /*
                                // If you're in the my lectures tab, leave the detail view
                                if(m.route.get().indexOf('meine-vorlesungen') >= 0) {
                                    m.route.set('/meine-vorlesungen')
                                }
                                */
                            });
                        } else {
                            firebase.database.ref('/users/' + StateUser.uid + '/favorites').update({[lid] : Date.now()}).then(function(result) {
                                console.log('Vorlesung ' + lid + ' ist jetzt favorisiert!');
                            });
                        }


                    }
                }, m('i.pretty-click.icon.' + (isFavorite ? 'ion-android-star clicked' : 'ion-android-star-outline unclicked'))
            )

        ]);
    }
};

module.exports = {
    view: function (vnode) {
        return m('.info-box.align-self-center', [
            m(singlenav, {lid: vnode.attrs.lid}),
            m(activeLecture, {lid: vnode.attrs.lid})
        ]);
    }
}

