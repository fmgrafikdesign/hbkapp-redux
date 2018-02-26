// Manages user info and cache data

var m = require('mithril');

var defaultimage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDEgMTAwLjgnPjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+IC5zdDB7ZmlsbDojQjNCM0IzO30gLnN0MXtmaWxsOiNGMkYyRjI7fSA8L3N0eWxlPjxyZWN0IGNsYXNzPSdzdDAnIHdpZHRoPScxMDEnIGhlaWdodD0nMTAxJy8+PGNpcmNsZSBjbGFzcz0nc3QxJyBjeD0nNTAuNScgY3k9JzQ3JyByPScyNS41Jy8+PGNpcmNsZSBjbGFzcz0nc3QxJyBjeD0nNTAuNScgY3k9JzEwNC44JyByPSczNi41Jy8+PC9zdmc+";

function setUserData(user) {
    StateUser.user.id = user.getId();
    StateUser.user.name = user.getName();
    StateUser.user.firstName = user.getGivenName();
    StateUser.user.lastName = user.getFamilyName();
    StateUser.user.image = user.getImageUrl();
    StateUser.user.mail = user.getEmail();
    //console.log('ID: ' + State.user.id); // Do not send to your backend! Use an ID token instead.
    //console.log('Name: ' + State.user.name);
    //console.log('Image URL: ' + State.user.image);
    //console.log('Email: ' + State.user.mail); // This is null if the 'email' scope is not present.
    m.redraw();
}

var StateUser = {
    number: 0,
    loggedIn: false,
    default_user: {
        name: "Vorname Nachname",
        image: defaultimage,
        studies: " "
    },

    name: "Vorname Nachname",
    image: defaultimage,
    studies: " ",
    active: false,


    setUser: function (user) {
        StateUser.uid = user.uid;
        StateUser.name = user.displayName;
        StateUser.image = user.photoURL;
        StateUser.mail = user.email;

        m.redraw();
    },

    resetUser: function () {
        StateUser.name = StateUser.default_user.name;
        StateUser.image = StateUser.default_user.image;
        StateUser.studies = StateUser.default_user.studies;

        m.redraw();
    }
};

module.exports = StateUser;