//All Lectures Tab

var m = require('mithril');
var SplitView = require('./SplitView');
var LecturesSummary = require('./LecturesSummary');
var LectureDetail = require('./LectureDetail');
var LectureHeader = require('./LectureHeader');

var lectures = [];

module.exports = {

    oncreate: function() {
        document.title = "Vorlesungen" + appTitleExt;
        console.log('oncreate');
    },

    view: function (vnode) {
        return [
            m(LectureHeader),
            m(SplitView, [
                m('.wrapper-1', m(LecturesSummary, {lid: vnode.attrs.lid})),
                m('.wrapper-2', m('.flex-box', m(LectureDetail, {lid: vnode.attrs.lid})))
            ])
        ]
    }
};