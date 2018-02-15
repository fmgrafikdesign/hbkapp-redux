var m = require('mithril');
var LectureSwitch = require('./LectureSwitch');
var LectureFilters = require('./LectureFilters');

module.exports = {
    view: function() {
        return m('.lectures-header', [
            m(LectureSwitch),
            m(LectureFilters)
        ])
    }
};