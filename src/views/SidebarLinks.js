var m = require('mithril');

var sidebar_items = [
    {
        name: "Vorlesungsverzeichnis",
        href: "/vorlesungen"
    },
    {
        name: "Meine Vorlesungen",
        href: "/meine-vorlesungen"
    },
    {
        name: "Mein Modulplan",
        href: "/modulplan"
    },
    {
        name: "Informationen",
        href: "/informationen",
        inactive: true
    },
    {
        name: "Extern",
        href: "/extern",
        inactive: true
    },
    {
        name: "Einstellungen",
        href: "/settings",
        inactive: true
    }
]

module.exports = {
    oncreate: function() {
        Waves.attach('.sidebar-link', ['waves-button']);
        Waves.init();
        //Waves.ripple('.sidebar-link');
    },
    onupdate: function() {
        Waves.attach('.sidebar-link', ['waves-button']);
        //Waves.init();
        //Waves.ripple('.sidebar-link.active');
    },
    view: function() {
        return sidebar_items.map(function(item) {
                return item.inactive ? null : m("a.sidebar-link", {href: item.href, oncreate: m.route.link, class: 'waves-button waves-light waves-block ' + (m.route.get().indexOf(item.href) >= 0 ? 'active' : '')}, item.name);
            });
    }
}