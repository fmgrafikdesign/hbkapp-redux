var m = require('mithril');
var State = require('../models/State');
var SidebarLogin = require('./SidebarLogin');

var profile = {
    view: function () {
        return [
            // User image
            m('.user-image-wrapper', m('img.img-fluid.user-image', {src: State.user.image})),
            // User name
            m('.user-info-wrapper', [
                    m('.user-name-wrapper', m('span.user-name', State.user.name)),
                    m('.user-studies-wrapper', m('span.user-studies', State.user.studies))
                ]
            )
            // User Studiengang
        ]
    }
}

var profile_container = {
    view: function () {
        return m('.user-profile-wrapper', m('.user-profile', [
            m(profile), m(SidebarLogin)
            ]
        ))
    }
}

module.exports = {
    view: function () {
        return [
            m(profile_container, m(profile))
        ]
    }
}