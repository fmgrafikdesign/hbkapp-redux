var m = require('mithril');
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
    if (user) {
        // User is signed in.
        StateUser.loggedIn = true;
        globalFirebase.loggedIn = true;
        StateUser.setUser(user);

        // Load course of studies of user

        // Load My Lectures
        var userId = StateUser.uid;

        database.ref('/users/' + userId + '/favorites').on('value', function(snapshot) {
            //console.log(snapshot.val());
            StateLectures.updateMyLectures(snapshot.val());
        });

        // Load filter prefs


        // Load Modules

        document.body.classList.remove("not-logged-in");
        document.body.classList.add("logged-in");
    } else {
        // No user is signed in.
        StateUser.loggedIn = false;
        globalFirebase.loggedIn = false;
        StateUser.resetUser();


        // Reset My Lectures
        StateLectures.myLectures = [];

        // Reset Modules

        document.body.classList.remove("logged-in");
        document.body.classList.add("not-logged-in");
    }
});

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().useDeviceLanguage();

function googleLogin() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
        //console.log('results are in:');
        var token = result.credential.accessToken;
        //console.log(token);
        var user = result.user;
        //console.log(user);

    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log('error:');
        console.log(errorCode, errorMessage);
    })
}

function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        document.body.classList.remove("logged-in");

    }).catch(function(error) {
        // An error happened.
    });
    m.redraw();
}

function isUserEqual(googleUser, firebaseUser) {
    if (firebaseUser) {
        var providerData = firebaseUser.providerData;
        for (var i = 0; i < providerData.length; i++) {
            if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
                providerData[i].uid === googleUser.getBasicProfile().getId()) {
                // We don't need to reauth the Firebase connection.
                return true;
            }
        }
    }
    return false;
}

var globalFirebase = {
    firebase: firebase,
    database: firebase.database(),
    auth: firebase.auth(),
    loggedIn: false,
    login: googleLogin,
    logout: signOut,
};

module.exports = globalFirebase;
