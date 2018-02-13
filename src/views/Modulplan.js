//Modulplan

var m = require('mithril');
var State = require("../models/State");

module.exports = {
    view: function() {
        return m('a', {onclick: addUp }, 'Modulplan ' + State.number);
    }
};

function addUp() {
    State.number++;
}