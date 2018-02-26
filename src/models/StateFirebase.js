var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var StateLectures = require('./StateLectures');

var StateUser = require('./StateUser');

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

firebase.auth().onAuthStateChanged(function(user) {
    console.log('registering listener');
    if (user) {
        // User is signed in.
        StateUser.loggedIn = true;
        StateUser.setUser(user);

        // Load course of studies of user

        // Load My Lectures
        var userId = StateUser.uid;

        database.ref('/users/' + userId + '/favorites').on('value', function(snapshot) {
            //console.log(snapshot.val());
            StateLectures.updateMyLectures(snapshot.val());
        });

        // Load Modules

        document.body.classList.add("logged-in");
    } else {
        // No user is signed in.
        StateUser.loggedIn = false;
        StateUser.resetUser();


        // Reset My Lectures
        StateLectures.myLectures = [];

        // Reset Modules

        document.body.classList.remove("logged-in");
    }
});

var globalFirebase = {
    firebase: firebase,
    database: firebase.database(),
    auth: firebase.auth()
};

module.exports = globalFirebase;
