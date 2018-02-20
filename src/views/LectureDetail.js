var m = require('mithril');
var StateLectures = require('../models/StateLectures');
var LectureSingleCard = require('./LectureSingleCard');

var activeLecture = {
    view: function(vnode) {
//        if(vnode.attrs.lid) {
//            StateLectures.setActive(vnode.attrs.lid);
        //}
        //console.log(StateLectures.activeLectureID);
        //console.log(StateLectures.activeLecture);
        var lecture = StateLectures.getLecture(vnode.attrs.lid);

        return m(LectureSingleCard, {lecture: lecture});
    }
};

var backNav = {
    view: function() {
        return m('.mobile-only .back-nav', m('.back-button', { onclick: removeBodyClass('')} ,''))
    }
}

module.exports = {
    view: function(vnode) {
        return m('.info-box.align-self-center', m(activeLecture, {lid: vnode.attrs.lid}));
    }
}

