var m = require('mithril');
var State = require("../models/StateUser");

var StateFirebase = require('../models/StateFirebase');
var LoginButton = require('./LoginButton');

var setupCompleted = false;

/* New firebase api */

/* Firebase setup */


/* Old google sign-in api */
/*

function signOut() {
    if (typeof gapi.auth2 === 'undefined') return;
    //console.log(gapi);
    auth2.signOut().then(function() {
        //console.log('User signed out.');
        document.body.classList.remove("logged-in");
    });
    m.redraw();
}

function googleLogin() {
    // If the auth2 isn't loaded yet, abort
    if(typeof auth2 === 'undefined') return;

    auth2.signIn();
}

var scriptLoaded = loadScriptAsync('https://apis.google.com/js/platform.js');

scriptLoaded.then(function() {
    //console.log('google loaded');
    onLoad();
});

function onLoad() {
    gapi.load("auth2", function() {

        gapi.auth2.init({
            client_id: "934253145013-m5c4tnhuhtect51h8k749sp0qfm5ojnj.apps.googleusercontent.com",
            scope: "email profile openid"
        }).then(function() {
            auth2 = gapi.auth2.getAuthInstance();
            setupUser();
            addBodyClass('google-login-ready');


            // Listen for future sign ins and outs
            auth2.isSignedIn.listen(function (val) {
                //console.log("Signin state changed to ", val);

                // Update user object
                if (val === false) {
                    State.resetUser();
                } else {
                    setupUser();
                }

                // Retrieve database info

                m.redraw();
            });

            // Listen for user changes
            auth2.currentUser.listen(function (user) {
                //console.log("User now: " , user.getBasicProfile());
                setupUser();
            });
        });

    })
}

function setupUser() {
    if(auth2.isSignedIn.get()) {
        var currentuser = auth2.currentUser.get().getBasicProfile();
        setUserData(currentuser);
        addBodyClass('logged-in')
        //console.log('User set up');

        // Database stuff

    } else {
        //console.log('User not logged in');
    }
}

function setUserData(user) {
    State.user.id = user.getId();
    State.user.name = user.getName();
    State.user.firstName = user.getGivenName();
    State.user.lastName = user.getFamilyName();
    State.user.image = user.getImageUrl();
    State.user.mail = user.getEmail();
    //console.log('ID: ' + State.user.id); // Do not send to your backend! Use an ID token instead.
    //console.log('Name: ' + State.user.name);
    //console.log('Image URL: ' + State.user.image);
    //console.log('Email: ' + State.user.mail); // This is null if the 'email' scope is not present.
    m.redraw();
}

*/

// That was a lot of stuff for a simple login logout roundabout

module.exports = {
    view: function() {
        return m('.auth-links', [
            //m('.g-signin', { onclick: setupSignin } ,''),
            m(LoginButton),
            m('a.google-auth-button.google-logout', {onclick: StateFirebase.logout }, 'Ausloggen')
        ])
    }
}