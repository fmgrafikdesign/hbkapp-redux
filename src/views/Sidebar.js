var m = require('mithril');
var Waves = require('node-waves');
var SidebarLinks = require('./SidebarLinks');
var SidebarProfile = require('./SidebarProfile');


var sidebar = {
    view: function(vnode) {
        return m('nav#menu', m('div.navbar' ,[
            m(SidebarProfile),
            m(SidebarLinks)
        ]))
    }
}



module.exports = {

    view: function () {
        return m(sidebar);
    }
}