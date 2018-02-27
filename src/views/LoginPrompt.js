var m = require('mithril');
var LoginButton = require('./LoginButton');

var prompt = {
    view: function () {
        return [
            m('.parent-height.flex-box.align-center.text-center', m('.items-wrapper', [
                    m('p.lead', 'Bitte melde dich an, um dieses Feature zu benutzen'),
                    m(LoginButton)
                ]
                )
            )
        ];
    }
};

module.exports = prompt;