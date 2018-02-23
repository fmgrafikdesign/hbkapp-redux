//My Lectures Tab

var m = require('mithril');
var SplitView = require('./SplitView');
var LecturesSummary = require('./LecturesSummary');
var LectureDetail = require('./LectureDetail');
var LectureHeader = require('./LectureHeader');
var MyLecturesFilter = require('../models/MyLecturesFilter');

module.exports = {

    oncreate: function() {
        document.title = "Meine Vorlesungen" + appTitleExt;
    },

    view: function (vnode) {
        // TODO: Get saved lectures
        return [
            m(LectureHeader, { filter: MyLecturesFilter }),
            m(SplitView, [
                m('.wrapper-1', m(LecturesSummary, {lid: vnode.attrs.lid, lectures: null})),
                m('.wrapper-2', m('.flex-box', m(LectureDetail, {lid: vnode.attrs.lid})))
            ])
        ]
    }
};