//All Lectures Tab

var m = require('mithril');
var SplitView = require('./SplitView');
var LecturesSummary = require('./LecturesSummary');
var LectureDetail = require('./LectureDetail');
var LectureHeader = require('./LectureHeader');
var StateLectures = require('../models/StateLectures');
var LecturesFilter = require('../models/LecturesFilter');

module.exports = {

    oncreate: function() {
        document.title = "Vorlesungen" + appTitleExt;
    },

    view: function (vnode) {

        // The lectures you give to the LecturesSummary module
        var lectures = StateLectures.lectures;

        //var perf = performance.now();

        // Filter them

        // Let the filter model handle the filtering
        lectures = LecturesFilter.filter(lectures);
        console.log(LecturesFilter.sortLectures);
        lectures.sort(LecturesFilter.sortLectures);
        //console.log(performance.now() - perf);


        return [
            m(LectureHeader, { filter: LecturesFilter }),
            m(SplitView, [
                m('.wrapper-1', m(LecturesSummary, {lid: vnode.attrs.lid, lectures: lectures})),
                m('.wrapper-2', m('div', m(LectureDetail, {lid: vnode.attrs.lid})))
            ])
        ]
    }
};