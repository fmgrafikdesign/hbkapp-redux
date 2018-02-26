var m = require('mithril');

var ModulesSummary = {
    view: function() {
        var options = ['Ada', 'Java', 'Javascript', 'Brainfuck', 'LOLCODE'];
        return [
            m('.module-list', 'Alle Module hier')
        ];
    }
};

module.exports = ModulesSummary;