// Manages user info and cache data

var m = require('mithril');

var defaultimage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDEgMTAwLjgnPjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+IC5zdDB7ZmlsbDojQjNCM0IzO30gLnN0MXtmaWxsOiNGMkYyRjI7fSA8L3N0eWxlPjxyZWN0IGNsYXNzPSdzdDAnIHdpZHRoPScxMDEnIGhlaWdodD0nMTAxJy8+PGNpcmNsZSBjbGFzcz0nc3QxJyBjeD0nNTAuNScgY3k9JzQ3JyByPScyNS41Jy8+PGNpcmNsZSBjbGFzcz0nc3QxJyBjeD0nNTAuNScgY3k9JzEwNC44JyByPSczNi41Jy8+PC9zdmc+";

var State = {
    number: 0,
    noUser: function() {
        return Object.keys(State.user).length === 0 && State.user.constructor === Object;
    },
    activeUser: function() {
        return !(Object.keys(State.user).length === 0 && State.user.constructor === Object);
    },
    default_user : {
        name: "Vorname Nachname",
        image: defaultimage,
        studies: "Studiengang"
    },
    user: {
        name: "Vorname Nachname",
        image: defaultimage,
        studies: "Studiengang"
    },

    resetUser: function() {
        State.user.name = State.default_user.name;
        State.user.image = State.default_user.image;
        State.user.studies = State.default_user.studies;
        console.log(State.default_user);
        //m.redraw();
    },

    lectures: [],
    loadLectures: function() {


        m.request({
            method: "GET",
            url: "https://hbkapp.fmgrafikdesign.de/vorlesungen.json"
        }).then(function(result) {
            State.lectures = result;

            // Performance test for md5
            var perf = performance.now();
            var hash = md5(State.lectures);
            console.log(performance.now() - perf);

        })
    }
};

module.exports = State;