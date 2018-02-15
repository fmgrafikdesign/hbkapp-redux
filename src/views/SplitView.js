var m = require('mithril');

module.exports = {
    view: function (vnode) {
        return m('section#split-view-controller.split-view-controller.parent-height', [
            m('div.split-section.split-section-1', vnode.children[0]),
            m('div.split-section.split-section-2', vnode.children[1])
        ])
    }
}