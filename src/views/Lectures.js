//vorlesungen
var m = require('mithril');
var State = require("../models/State");
var SplitView = require('./SplitView');

module.exports = {
    oninit: function() {
        //console.log('creating lectures');
        //console.log(State.user);
    },
    onupdate: function() {
        //console.log('onupdate2');
        //console.log(State.user);
    },
    view: function() {
        return m(SplitView, [m('.wrapper-1', 'Part 1'), m('.wrapper-2', 'Part 2')]);
    }
};