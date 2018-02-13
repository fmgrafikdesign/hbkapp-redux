//vorlesungen
var m = require('mithril');
var State = require("../models/State");

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
        return m('p', ('Lectures ' + (State.activeUser() ? State.user : 'no User')));
    }
};