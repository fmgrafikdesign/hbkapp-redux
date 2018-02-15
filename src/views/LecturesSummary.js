var m = require('mithril');
var State = require('../models/State');
var LectureListItem = require('./LectureListItem');

if (State.lectures.length === 0) {
    State.loadLectures();
}

module.exports = {
    oncreate: function() {
        Waves.attach('.lecture-list-item');
        //Waves.init();
        console.log('attached');
        //Waves.ripple('.sidebar-link');
    },
    onupdate: function() {
        Waves.attach('.lecture-list-item');
        //Waves.init();
        console.log('updated attached');
        //Waves.ripple('.sidebar-link');
    },
    view: function () {
        //console.log(State.lectures);
        return State.lectures.map(function (lecture) {
            return m('.lecture-list-item-wrapper', m(LectureListItem, {lecture: lecture}));
        });
    }
};