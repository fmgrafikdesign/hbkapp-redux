var m = require('mithril');
var StateFirebase = require('../models/StateFirebase');

module.exports = {
    view: function () {
        return m('a.google-auth-button.google-login', {onclick: StateFirebase.login}, 'Login with Google');
    }
}