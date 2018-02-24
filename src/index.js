var m = require("mithril");
var Lectures = require("./views/Lectures");
var Modulplan = require('./views/Modulplan');
var Information = require('./views/Information')
var Layout = require ('./views/Layout');
var Extern = require ('./views/Extern');
var Settings = require ('./views/Settings');
var MyLectures = require('./views/MyLectures');
var firebase = require('firebase/app');
require('firebase/database');

/* Initialize firebase */

var config = {
    apiKey: "AIzaSyCb3hKE4Qc-fwJp4Iff15t1uKvo81RQZ98",
    authDomain: "hbkapp-redux-1518314906354.firebaseapp.com",
    databaseURL: "https://hbkapp-redux-1518314906354.firebaseio.com",
    projectId: "hbkapp-redux-1518314906354",
    storageBucket: "hbkapp-redux-1518314906354.appspot.com",
    messagingSenderId: "934253145013"
};
firebase.initializeApp(config);

var database = firebase.database();


m.route(document.body, "/vorlesungen", {

    "/vorlesungen": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Lectures));
        }
    },
    "/vorlesungen/:lid": {
        onmatch: function() {
            addBodyClass('second-screen');
        },
        render: function(param) {
            return m(Layout, m(Lectures, { lid: param.attrs.lid }));
        }
    },
    "/meine-vorlesungen": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(MyLectures));
        }
    },
    "/meine-vorlesungen/:lid": {
        onmatch: function() {
            addBodyClass('second-screen');
        },
        render: function(param) {
            return m(Layout, m(MyLectures, { lid: param.attrs.lid }));
        }
    },
    "/modulplan": {
        onmatch: function() {
            removeBodyClass('second-screen');
        },
        render: function() {
            return m(Layout, m(Modulplan));
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
