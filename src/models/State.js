var m = require('mithril');

module.exports = {
    number: 0,
    noUser: function() {
        return Object.keys(this.user).length === 0 && user.constructor === Object;
    },
    activeUser: function() {
        return !(Object.keys(this.user).length === 0 && user.constructor === Object);
    },
    user: {}
}