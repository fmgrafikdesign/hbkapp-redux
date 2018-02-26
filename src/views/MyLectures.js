//My Lectures Tab

var m = require('mithril');
var SplitView = require('./SplitView');
var LecturesSummary = require('./LecturesSummary');
var LectureDetail = require('./LectureDetail');
var StateLectures = require('../models/StateLectures');
var MyLecturesFilter = require('../models/MyLecturesFilter');

module.exports = {

    oncreate: function() {
        document.title = "Meine Vorlesungen" + appTitleExt;
    },

    view: function (vnode) {
        // TODO: Get saved lectures

        var mylectures = StateLectures.myLectures;
        //console.log(mylectures);

        return [
            m(SplitView, [
                m('.wrapper-1', m(LecturesSummary, {lid: vnode.attrs.lid, lectures: mylectures, ismylectures: true})),
                m('.wrapper-2', m('div', m(LectureDetail, {lid: vnode.attrs.lid})))
            ])
        ]
    }
};