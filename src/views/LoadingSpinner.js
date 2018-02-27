var m = require('mithril');


var spinner = {
    view: function() {
        return m('.spinner-wrapper', m('.spinner', [
            m('.rect1'),
            m('.rect2'),
            m('.rect3'),
            m('.rect4'),
            m('.rect5')
        ])
    )
    }
};

module.exports = spinner;