var m = require('mithril');

module.exports = {
    view: function(vnode) {
        return m('.list-header', [
            // filter: The filter model that should be used for the lectures
            m('span', 'yes')
        ])
    }
};