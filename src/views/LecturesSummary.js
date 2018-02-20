var m = require('mithril');
var StateLectures = require('../models/StateLectures');
var LectureListItem = require('./LectureListItem');

if (StateLectures.lectures.length === 0) {
    StateLectures.loadLectures();
}

module.exports = {
    view: function (vnode) {
        //console.log(StateLectures.lectures);
        return StateLectures.lectures.map(function (lecture) {
            return m('.lecture-list-item-wrapper', m(LectureListItem, {lid: vnode.attrs.lid, lecture: lecture}));
        });
    }
};