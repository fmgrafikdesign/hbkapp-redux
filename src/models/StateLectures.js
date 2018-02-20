var m = require('mithril');

var StateLectures = {

    state: {
        secondScreen: false
    },

    oninit: function() {
        console.log('oninit StateLectures');
    },

    lectures: [],
    loadLectures: function () {

        var requestLectures = function () {
            m.request({
                method: "GET",
                url: "https://hbkapp.fmgrafikdesign.de/vorlesungen.json"
            }).then(function (result) {

                StateLectures.lectures = result;
                // Cache lectures
                localStorage.setItem('lectures', JSON.stringify(result));

                m.request({
                    method: "GET",
                    url: "https://hbkapp.fmgrafikdesign.de/checksum.txt"
                }).then(function (result) {
                    // Cache checksum
                    localStorage.setItem('checksum', result);
                });
            })
        };

        // Check whether lectures are up to date if localStorage is available

        if (storageAvailable('localStorage')) {
            var checksum = localStorage.getItem('checksum');
            if (checksum) {
                // Request current checksum from server
                m.request({
                    method: "GET",
                    url: "https://hbkapp.fmgrafikdesign.de/checksum.txt"
                }).then(function (result) {
                    // If received checksum equals current, we're up to date and can abort
                    if (result == checksum) {
                        console.log('lectures up to date');
                        StateLectures.lectures = JSON.parse(localStorage.getItem('lectures'));
                    }
                    else {
                        console.log('lectures not up to date, requesting...');
                        requestLectures();
                    }
                });
            } else {
                requestLectures();
            }
        }

        else {
            console.log('No local storage found, requesting without cache system...');
            requestLectures();
        }

    },
    activeLectureID: -1,
    activeLecture: {},
    setActive: function(id) {
        // Remove the active-lecture class from the current DOM element
        if(StateLectures.hasActive()) {
            document.getElementById(StateLectures.activeLectureID).classList.remove('active-lecture');
        }

        StateLectures.activeLectureID = id;

        StateLectures.activeLecture = StateLectures.lectures.find( function(lecture) {
             return lecture.id === id;
        } );
        //console.log(StateLectures.activeLecture);
    },
    hasActive: function() {
        return StateLectures.activeLectureID !== -1;
    },
    getLecture: function(id) {
        //console.log('getting lecture with id ' + id);
        var lecture = StateLectures.lectures.find( function(lecture) {
            return lecture.id === parseInt(id);
        } );
        //console.log(lecture);
        return lecture;
    }
};

module.exports = StateLectures;