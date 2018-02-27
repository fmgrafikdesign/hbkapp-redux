var m = require('mithril');
var spinner = require('../LoadingSpinner');
var firebase = require('../../models/StateFirebase');

var ModulesSummary = {
    view: function() {

        if(!firebase.loggedIn) return m(spinner);

        var options = ['Ada', 'Java', 'Javascript', 'Brainfuck', 'LOLCODE'];
        return [
            m('.module-list', m(spinner))
        ];
    }
};

module.exports = ModulesSummary;