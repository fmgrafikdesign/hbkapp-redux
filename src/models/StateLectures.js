var m = require('mithril');
var LecturesFilter = require('./LecturesFilter');
var MyLecturesFilter = require('./MyLecturesFilter');
//var ModulesDetail = require('../views/MyModules/ModulesDetail');
var settings = require('../globals');

var StateLectures = {

    state: {
        secondScreen: false
    },

    lectures: [],
    myLectures: [],
    lectureTitles: [],

    updateLectureTitles: function() {
        //console.log('updating lecture titles...');
        StateLectures.lectureTitles = StateLectures.lectures.map(function(lecture) {
            return lecture.titel;
        });
        //console.log(ModulesDetail.lectureTitles);
    },

    // Gets called once the lectures are loaded successfully
    loaded: function () {

        // Update available lectures for autocomplete
        StateLectures.updateLectureTitles();

        // Info for loading spinners etc that we received data
        StateLectures.receivedLectures = true;

        // Tells the filter module the different studies it can filter for
        var studies = ['Alle Studiengänge'];

        //var perf = performance.now();

        StateLectures.lectures.forEach(function (lecture) {
            lecture.fachrichtung.forEach(function (fachrichtung) {
                if (!studies.find(function (study) {
                        return fachrichtung === study;
                    })) {
                    //studies.push(fachrichtung.substring(0, fachrichtung.indexOf('–') !== -1 ? fachrichtung.indexOf('–') : fachrichtung.length));
                    studies.push(fachrichtung);
                }
            })
        });

        studies.sort();

        //console.log(performance.now() - perf);
        //console.log(studies);

        // Assign the array to the studies of the filters
        LecturesFilter.studies = studies;
        MyLecturesFilter.studies = studies;

        if (storageAvailable('localStorage')) {
            var index = parseInt(localStorage.getItem('studyIndex'));
            /* console.log(index); */
            if(index && studies.length >= index) {
                LecturesFilter.setStudyIndex(index);
            }

            var sort = localStorage.getItem('sort');
            if(sort) {
                LecturesFilter.setSort(sort);
            }
        }

    },
    loadLectures: function () {

        var requestLectures = function () {
            m.request({
                method: "GET",
                url: settings.vorlesungen_url + '?nocache=' + (new Date()).getTime()
            }).then(function (result) {

                //console.log(result);

                StateLectures.lectures = result;
                // Cache lectures
                if (storageAvailable('localStorage')) {
                    localStorage.setItem('lectures', JSON.stringify(result));
                }

                // Call loaded event
                StateLectures.loaded();

                if (storageAvailable('localStorage')) {
                    m.request({
                        method: "GET",
                        url: settings.vorlesungen_checksum_url + '?nocache=' + (new Date()).getTime()
                    }).then(function (result) {
                        // Cache checksum
                        localStorage.setItem('checksum', result);
                    }).catch(function(e) {
                        console.log('request failed, error:');
                        console.log(e);
                    });
                }
            })
        };

        // Check whether lectures are up to date if localStorage is available

        if (storageAvailable('localStorage')) {
            var checksum = localStorage.getItem('checksum');
            if (checksum) {
                // Request current checksum from server
                m.request({
                    method: "GET",
                    url: settings.vorlesungen_checksum_url + '?nocache=' + (new Date()).getTime()
                }).then(function (result) {
                    //console.log('checksum result:');
                    //console.log(result);
                    // If received checksum equals current, we're up to date and can abort
                    if (result == checksum) {
                        //console.log('lectures up to date, using cache');
                        StateLectures.lectures = JSON.parse(localStorage.getItem('lectures'));
                        StateLectures.loaded();
                    }
                    else {
                        //console.log('lectures not up to date, requesting...');
                        requestLectures();
                    }
                }).catch(function(e) {
                    //console.log('request failed, error:');
                    //console.log(e);

                    // use cache if everything else fails
                    StateLectures.lectures = JSON.parse(localStorage.getItem('lectures'));

                    // call loaded event
                    StateLectures.loaded();

                });
            } else {
                requestLectures();
            }
        }

        else {
            //console.log('No local storage found, requesting without cache system...');
            requestLectures();
        }

    },
    activeLectureID: -1,
    activeLecture: {},
    setActive: function (id) {
        // Remove the active-lecture class from the current DOM element
        if (StateLectures.hasActive()) {
            document.getElementById(StateLectures.activeLectureID).classList.remove('active-lecture');
        }

        StateLectures.activeLectureID = id;

        StateLectures.activeLecture = StateLectures.lectures.find(function (lecture) {
            return lecture.id === id;
        });
        //console.log(StateLectures.activeLecture);
    },
    hasActive: function () {
        return StateLectures.activeLectureID !== -1;
    },
    getLecture: function (lid) {
        //console.log('getting lecture with lid ' + lid);
        //console.log(StateLectures.lectures);
        var lecture = StateLectures.lectures.find(function (lecture) {
            return parseInt(lecture.id) === parseInt(lid);
        });
        //console.log('found lecture:');
        //console.log(lecture);

        //TODO if lecture is not found in currently available lectures, request from database

        return lecture;
    },

    updateMyLectures: function(ids) {
        StateLectures.myLectures = [];
        StateLectures.receivedMyLectures = true;

        if(!ids) {
            m.redraw();
            return ;
        }

        Object.keys(ids).forEach(function(key) {
            //console.log(key);
            StateLectures.myLectures.push(StateLectures.getLecture(key));
        });

        //console.log('updated my lectures:');
        //console.log(StateLectures.myLectures);
        m.redraw();
    },
    isFavorite: function(lid) {
        //console.log('trying to find lid in favorites:');
        var result = StateLectures.myLectures.find(function(lecture) {
            if((!lecture) || !lecture.id) return false;
            return parseInt(lecture.id) === parseInt(lid);
        });
        //console.log(result);
        return result;
    },

    receivedLectures: false,
    receivedMyLectures: false
};

module.exports = StateLectures;