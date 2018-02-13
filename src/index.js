var m = require("mithril");
var Lectures = require("./views/Lectures");
var Modulplan = require('./views/Modulplan');
var Information = require('./views/Information')
var Layout = require ('./views/Layout');
var Extern = require ('./views/Extern');
var About = require ('./views/About');

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
    "/ueber": {
        render: function() {
            return m(Layout, m(About));
        }
    }

});
