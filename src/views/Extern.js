var UnderConstruction = require('./UnderConstruction');
var m = require('mithril');

module.exports = {
    oncreate: function() {
        document.title = "Extern" + appTitleExt;
    },
    view: function() {
        return m('.under-construction-wrapper.parent-height',
            m('.under-construction-container', m(UnderConstruction))
        );
    }
};