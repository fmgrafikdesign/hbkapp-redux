var m = require('mithril');
var ExternalLinks = [
    {
        "title" : "Organisatorisch",
        "id" : "0",
        "items" : [
            {
                "item_name" : "Downloadseite für Formulare",
                "item_link" : ""
            },
            {
                "item_name" : "Prüfungsamt",
                "item_link" : ""
            },
            {
                "item_name" : "Studierendenverwaltung",
                "item_link" : ""
            },
            {
                "item_name" : "Rektorat",
                "item_link" : ""
            },
            {
                "item_name" : "Pressestelle",
                "item_link" : ""
            },
            {
                "item_name" : "Akademisches Auslandsamt",
                "item_link" : ""
            },
            {
                "item_name" : "Haus- und technische Dienste",
                "item_link" : ""
            },
            {
                "item_name" : "Vorsitzende",
                "item_link" : ""
            },
            {
                "item_name" : "Beauftragte",
                "item_link" : ""
            },
            {
                "item_name" : "Personalrat",
                "item_link" : ""
            },
            {
                "item_name" : "Internationales Office",
                "item_link" : ""
            },
            {
                "item_name" : "Netzwerk & Computer",
                "item_link" : ""
            }
        ]
    },
    {
        "title" : "Werkstätten",
        "id" : "1",
        "items" : [
            {
                "item_name" : "CAD",
                "item_link" : ""
            },
            {
                "item_name" : "Digitales Produktionszentrum",
                "item_link" : ""
            },
            {
                "item_name" : "Druckzentrum",
                "item_link" : ""
            },
            {
                "item_name" : "Fotoatelier",
                "item_link" : ""
            },
            {
                "item_name" : "Holzwerkstatt",
                "item_link" : ""
            },
            {
                "item_name" : "Metallwerkstatt",
                "item_link" : ""
            },
            {
                "item_name" : "Offene Werkstatt Völklingen",
                "item_link" : ""
            },
            {
                "item_name" : "Tonstudio",
                "item_link" : ""
            },
            {
                "item_name" : "Videoatelier",
                "item_link" : ""
            }
        ]
    },
    {
        "title" : "Einrichtungen",
        "id" : "2",
        "items" : [
            {
                "item_name" : "Archiv",
                "item_link" : ""
            },
            {
                "item_name" : "ASTA",
                "item_link" : ""
            },
            {
                "item_name" : "Bibliothek",
                "item_link" : ""
            },
            {
                "item_name" : "Experimental Media Lab",
                "item_link" : ""
            },
            {
                "item_name" : "Galerie",
                "item_link" : ""
            },
            {
                "item_name" : "Mediapool",
                "item_link" : ""
            },
            {
                "item_name" : "Medienfassade",
                "item_link" : ""
            },
            {
                "item_name" : "S_A_R Projektbüro Völklingen",
                "item_link" : ""
            }
        ]
    }
];

var ExternalLinkList = {
    view: function() {
        return m('.external-link-list.d-md-flex', ExternalLinks.map(function (category) {
            return m('.external-link-category', [
                m('h4.external-link-category-heading', category.title),
                m('.external-link-links', category.items.map(function (item) {
                    return m('a.external-link.d-block', {
                        href: item.item_link
                    }, item.item_name)
                }))
            ]);
        }))
    }
}

module.exports = ExternalLinkList