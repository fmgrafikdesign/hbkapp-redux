var m = require("mithril");
var Lectures = require("./views/Lectures");
var Modulplan = require('./views/Modulplan');
var Information = require('./views/Information')
var Layout = require ('./views/Layout');
var Extern = require ('./views/Extern');
var Settings = require ('./views/Settings');

m.route(document.body, "/vorlesungen", {

    "/vorlesungen": {
        render: function() {
            return m(Layout, m(Lectures));
        }
    },
    "/modulplan": {
        render: function() {
            return m(Layout, m(Modulplan));
        }
    },
    "/informationen": {
        render: function() {
            return m(Layout, m(Information));
        }
    },
    "/extern": {
        render: function() {
            return m(Layout, m(Extern));
        }
    },
    "/settings": {
        render: function() {
            return m(Layout, m(Settings));
        }
    }

});
