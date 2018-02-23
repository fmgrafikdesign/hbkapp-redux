var m = require('mithril');
var LectureSwitch = require('./LectureSwitch');
var LectureFilters = require('./LectureFilters');

module.exports = {
    view: function(vnode) {
        return m('.lectures-header', [
            // filter: The filter model that should be used for the lectures
            m(LectureFilters, {filter: vnode.attrs.filter})
        ])
    }
};