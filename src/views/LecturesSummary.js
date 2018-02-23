var m = require('mithril');
var StateLectures = require('../models/StateLectures');
var LectureListItem = require('./LectureListItem');

if (StateLectures.lectures.length === 0) {
    StateLectures.loadLectures();
}

module.exports = {
    view: function (vnode) {

        if(!vnode.attrs.lectures) {
            return "No lectures found";
        }
        //console.log(StateLectures.lectures);
        return vnode.attrs.lectures.map(function (lecture) {
            return m('.lecture-list-item-wrapper', m(LectureListItem, {lid: vnode.attrs.lid, lecture: lecture}));
        });
    }
};