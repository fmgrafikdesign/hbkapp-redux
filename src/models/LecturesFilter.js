var m = require('mithril');

var LecturesFilter = {
    studies: [],
    studyIndex: 0,
    setStudyIndex: function(index) {
        LecturesFilter.studyIndex = index;
        if (storageAvailable('localStorage')) {
            localStorage.setItem('studyIndex', index);
        }

        //TODO save study Index to the interwebz instead of local only

    },

    updateStudies: function() {

    },
    search: '',
    sort: 'newest_first',
    setSort: function(sort) {
        LecturesFilter.sort = sort;
        if (storageAvailable('localStorage')) {
            localStorage.setItem('sort', sort);
        }
    },
    //TODO save sort to the interwebz instead of local only

    filter: function(lectures) {

        if(!lectures) return;

        var study = LecturesFilter.studies[LecturesFilter.studyIndex];

        var filtered = lectures.filter(function(lecture) {
            if(!lecture) return;
            return (LecturesFilter.studyIndex === 0 || lecture.fachrichtung.find(function(fachrichtung) {
                return fachrichtung === study
            })) && (JSON.stringify(lecture).toLowerCase().indexOf(LecturesFilter.search.toLowerCase()) >= 0);
        });

        return filtered
    },

    sortLectures: function(a,b) {
        if(LecturesFilter.sort === 'newest_first') {
            return b.id - a.id;
        }

        else if(LecturesFilter.sort === 'name') {
            return a.titel.toLowerCase().localeCompare(b.titel.toLowerCase());
        }

        else if(LecturesFilter.sort === 'oldest_first') {
            return a.id - b.id;
        }

    }
};

module.exports = LecturesFilter;