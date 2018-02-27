//All Lectures Tab

var m = require('mithril');
var SplitView = require('../SplitView');
var LecturesSummary = require('./LecturesSummary');
var LectureDetail = require('./LectureDetail');
var StateLectures = require('../../models/StateLectures');
var LecturesFilter = require('../../models/LecturesFilter');

module.exports = {

    oncreate: function() {
        document.title = "Vorlesungen" + appTitleExt;
    },

    view: function (vnode) {

        // The lectures you give to the LecturesSummary module
        var lectures = vnode.attrs.lectures;
        var filter = vnode.attrs.filter;

        //var perf = performance.now();

        // Filter them

        // Let the filter model handle the filtering and sorting
        lectures = filter.filter(lectures);
        lectures.sort(filter.sortLectures);
        //console.log(performance.now() - perf);


        return [
            m(SplitView, [
                m('.wrapper-1.parent-height.flex-column', m(LecturesSummary, {lid: vnode.attrs.lid, lectures: lectures, filter: filter})),
                m('.wrapper-2', m('.parent-height', m(LectureDetail, {lid: vnode.attrs.lid})))
            ])
        ]
    }
};