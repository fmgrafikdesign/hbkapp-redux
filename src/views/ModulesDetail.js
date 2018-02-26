require('../awesomplete.min');
var m = require('mithril');

var ModulesDetail = {
    view: function(vnode) {
        var options = ['Ada', 'Java', 'Javascript', 'Brainfuck', 'LOLCODE'];
        return [
            m('input.awesomplete', { list: "myList"}),
            m('datalist#myList', options.map(function(option) {
                return m('option', option);
            }))
        ];
    }
};

module.exports = ModulesDetail;