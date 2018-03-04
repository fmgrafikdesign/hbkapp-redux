var m = require('mithril');

var singlenav = {
    view: function (vnode) {

        //if(!vnode.attrs.lid) return;

        //console.log(vnode.children);
        //console.log(vnode.attrs.additional);

        return m('.single-nav', [
            // Back button
            m('a.hide-desktop.single-nav-back-button', {href: vnode.attrs.backurl, oncreate: m.route.link, onupdate: m.route.link}, m('i.icon.ion-android-arrow-back')),
            vnode.children

        ]);
    }
};

module.exports = singlenav;