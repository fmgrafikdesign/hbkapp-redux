// Manages user info and cache data

var m = require('mithril');

var defaultimage = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAxMDEgMTAwLjgnPjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+IC5zdDB7ZmlsbDojQjNCM0IzO30gLnN0MXtmaWxsOiNGMkYyRjI7fSA8L3N0eWxlPjxyZWN0IGNsYXNzPSdzdDAnIHdpZHRoPScxMDEnIGhlaWdodD0nMTAxJy8+PGNpcmNsZSBjbGFzcz0nc3QxJyBjeD0nNTAuNScgY3k9JzQ3JyByPScyNS41Jy8+PGNpcmNsZSBjbGFzcz0nc3QxJyBjeD0nNTAuNScgY3k9JzEwNC44JyByPSczNi41Jy8+PC9zdmc+";

module.exports = {
    number: 0,
    noUser: function() {
        return Object.keys(this.user).length === 0 && this.user.constructor === Object;
    },
    activeUser: function() {
        return !(Object.keys(this.user).length === 0 && this.user.constructor === Object);
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
        this.user.name = this.default_user.name;
        this.user.image = this.default_user.image;
        this.user.studies = this.default_user.studies;
        console.log(this.default_user);
        //m.redraw();
    }
}

