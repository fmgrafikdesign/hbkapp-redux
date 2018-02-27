var m = require("mithril");
var Lectures = require("./views/Lectures/Lectures");
var Modules = require('./views/MyModules/Modules');
var Information = require('./views/Information')
var Layout = require ('./views/Layout');
var Extern = require ('./views/Extern');
var Settings = require ('./views/Settings');
/* var MyLectures = require('./views/MyLectures'); */
var StateLectures = require('./models/StateLectures');
var LecturesFilter = require('./models/LecturesFilter');
var MyLecturesFilter = require('./models/MyLecturesFilter');

if (StateLectures.lectures.length === 0) {
    StateLectures.loadLectures();
}

m.route(document.body, "/vorlesungen", {

    "/vorlesungen": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Lectures, { lectures: StateLectures.lectures, filter: LecturesFilter}));
        }
    },
    "/vorlesungen/:lid": {
        onmatch: function() {
            addBodyClass('second-screen');
        },
        render: function(param) {
            return m(Layout, m(Lectures, { lid: param.attrs.lid, lectures: StateLectures.lectures, filter: LecturesFilter }));
        }
    },
    "/meine-vorlesungen": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Lectures, { lectures: StateLectures.myLectures, filter: MyLecturesFilter}));
        }
    },
    "/meine-vorlesungen/:lid": {
        onmatch: function() {
            addBodyClass('second-screen');
        },
        render: function(param) {
            return m(Layout, m(Lectures, { lid: param.attrs.lid, lectures: StateLectures.myLectures, filter: MyLecturesFilter }));
        }
    },
    "/modulplan": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Modules));
        }
    },
    "/informationen": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Information));
        }
    },
    "/extern": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Extern));
        }
    },
    "/settings": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Settings));
        }
    }

});
