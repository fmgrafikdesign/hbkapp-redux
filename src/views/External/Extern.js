var m = require('mithril');
var ExternalHeader = require('./ExternalHeader');
var ExternalLinkList = require('./ExternalLinkList');

var ExternalDescription = {
    "heading" : "Links zu externen Seiten",
    "description" : "Diese Links öffnen sich in neuen Tabs und führen zu externen Seiten (größtenteils zu Unterseiten der HBK-Homepage).",
    view: function() {
        return m('.external-information', [
            m('h1', ExternalDescription.heading),
            m('p.external-description', ExternalDescription.description)
            ]
        )
    }
};

module.exports = {
    oncreate: function() {
        document.title = "Extern" + appTitleExt;
    },
    view: function() {
        return m('.wrapper-1.parent-height.flex-column', [
            //m(ExternalHeader),
            m('.external-content', [
                m(ExternalDescription),
                m(ExternalLinkList)
            ])
            ]

        );
    }
};