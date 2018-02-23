var m = require('mithril');

var LecturesFilter = {
    studies: [],
    studyIndex: 0,
    //TODO save study Index & get on reload

    updateStudies: function() {

    },
    search: '',
    sort: 'newest_first',
    filter: function(lectures) {
        var filtered = lectures.filter(function(lecture) {
            return JSON.stringify(lecture).toLowerCase().indexOf(LecturesFilter.search.toLowerCase()) >= 0;
        });

        return filtered
    }
};

module.exports = LecturesFilter;