var m = require('mithril');
var StateLectures = require('../../models/StateLectures');
var LectureSingleCard = require('./LectureSingleCard');
var firebase = require('../../models/StateFirebase');
var StateUser = require('../../models/StateUser');
var singlenav = require('../singlenav');

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

var favbutton = {
    view: function (vnode) {
        //console.log('favbutton called');

        if(!vnode.attrs.lid) return;

        return m('a.single-nav-fav-button', {
                onclick: function () {
                    var lid = vnode.attrs.lid;

                    // If the user is not logged in, prompt him to
                    if (!StateUser.loggedIn) {
                        firebase.login();
                        return;
                    }

                    var element = this;
                    element.classList.add('clicked');
                    setTimeout(function () {
                        element.classList.remove('clicked');
                    }, 400);

                    var isFavorite = StateLectures.isFavorite(vnode.attrs.lid);

                    if (isFavorite) {
                        firebase.database.ref('/users/' + StateUser.uid + '/favorites/' + lid).remove().then(function (result) {
                            //console.log('Vorlesung ' + lid + ' ist nicht mehr favorisiert!');
                            /*
                            // If you're in the my lectures tab, leave the detail view
                            if(m.route.get().indexOf('meine-vorlesungen') >= 0) {
                                m.route.set('/meine-vorlesungen')
                            }
                            */
                        });
                    } else {
                        var update = {};
                        update[lid] = Date.now();
                        firebase.database.ref('/users/' + StateUser.uid + '/favorites').update(update).then(function (result) {
                            //console.log('Vorlesung ' + lid + ' ist jetzt favorisiert!');
                        });
                    }


                }
            }, m('i.pretty-click.icon.' + (StateLectures.isFavorite(vnode.attrs.lid) ? 'ion-android-star clicked' : 'ion-android-star-outline unclicked'))
        )
    }
};

module.exports = {
    view: function (vnode) {
        return m('.info-box.align-self-center', [
            m(singlenav, {lid: vnode.attrs.lid, backurl: '/vorlesungen'}, m(favbutton, {lid: vnode.attrs.lid})),
            m(activeLecture, {lid: vnode.attrs.lid})
        ]);
    }
};
