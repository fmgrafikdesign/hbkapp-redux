//All Lectures Tab

var m = require('mithril');
var State = require("../models/State");
var SplitView = require('./SplitView');
var LecturesSummary = require('./LecturesSummary');
var LectureDetail = require('./LectureDetail');
var LectureHeader = require('./LectureHeader');

var lectures = [];

module.exports = {
    oninit: function () {
        //console.log(State.user);
    },
    onupdate: function () {
        //console.log('onupdate2');
        //console.log(State.user);
    },
    view: function () {
        return [
            m(LectureHeader),
            m(SplitView, [
                m('.wrapper-1', m(LecturesSummary)),
                m('.wrapper-2', m('.flex-box', m(LectureDetail)))
            ])
        ]
    }
};