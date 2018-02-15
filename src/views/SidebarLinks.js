var m = require('mithril');

var sidebar_items = [
    {
        name: "Vorlesungen",
        href: "/vorlesungen"
    },
    {
        name: "Mein Modulplan",
        href: "/modulplan"
    },
    {
        name: "Informationen",
        href: "/informationen"
    },
    {
        name: "Extern",
        href: "/extern"
    },
    {
        name: "Einstellungen",
        href: "/settings"
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
                return m("a.sidebar-link", {href: item.href, oncreate: m.route.link, class: 'waves-button waves-light waves-block ' + (m.route.get() === item.href ? 'active' : '')}, item.name);
            });
    }
}