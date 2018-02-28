var m = require('mithril');
var StateLectures = require('../../models/StateLectures');
var LectureListItem = require('./LectureListItem');
var LectureHeader = require('./LectureHeader');
var spinner = require('../LoadingSpinner');
var firebase = require('../../models/StateFirebase');
var LoginPrompt = require('../LoginPrompt');

module.exports = {
    view: function (vnode) {

        if(!vnode.attrs.lectures) {
            return "No lectures found";
        }

        // If you aren't logged in, show login prompt for my lectures
        if((!firebase.loggedIn) && vnode.attrs.filter.isMyLectures) {
            return m(LoginPrompt);
        }

        // If you haven't received "my Lectures" from the db yet: show spinner
        if(firebase.loggedIn && vnode.attrs.filter.isMyLectures && !StateLectures.receivedMyLectures) {
            console.log(firebase.loggedIn, vnode.attrs.filter.isMyLectures, !StateLectures.receivedMyLectures);
            return m(spinner);
        }

        // If you haven't received all lectures yet: show spinner
        if(!vnode.attrs.filter.isMyLectures && !StateLectures.receivedLectures) {
            return m(spinner);
        }

        //console.log(StateLectures.lectures);
        return [m(LectureHeader, { filter: vnode.attrs.filter }), m('.lecture-list', vnode.attrs.lectures.map(function (lecture) {
            return m('.list-item-wrapper', m(LectureListItem, {lid: vnode.attrs.lid, lecture: lecture, isMyLectures: vnode.attrs.filter.isMyLectures}))
        }))]
    }
};