var m = require('mithril');
var Waves = require('node-waves');
var SidebarLinks = require('./SidebarLinks');
var SidebarProfile = require('./SidebarProfile');
var SidebarThemes = require('./SidebarThemes');

var sidebar = {
    view: function(vnode) {
        return m('nav#menu', m('div.navbar' ,[
            m(SidebarProfile),
            m(SidebarThemes),
            m('.sidebar-links', m(SidebarLinks))
        ]))
    }
}



module.exports = {

    view: function () {
        return m(sidebar);
    }
}