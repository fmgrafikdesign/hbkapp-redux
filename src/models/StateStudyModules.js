var m = require('mithril');

function Modul(id, name, teilmodule, abschluesse) {
    this.id = id;
    this.name = name;
    this.teilmodule = teilmodule;
    this.abschluesse = abschluesse;
    this.finished = false;
}

var modules = {
    "studiengaenge": ["Freie Kunst", "Kommunikationsdesign", "Produktdesign", "Media Art & Design"],
    "abschluesse": ["Bachelor", "Diplom", "Master"],
    "module": [
        {
            "modul_id": 0,
            "Modul": "Modul 01: Praxis I",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 0, "bezeichnung" : "Atelierprojekt", "kurs" : "Bildnerische Grundlagen", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 0, "bezeichnung" : "Fachpraxis (frei wählbar)", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 0, "bezeichnung" : "Fachpraxis Zeichnen", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 0, "bezeichnung" : "Fachpraxis Werkstatt", "kurs" : "", "schein": false, "cp": 4}
            ]
        },
        {
            "modul_id" : 1,
            "Modul": "Modul 02: Praxis II",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 1, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 1, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 1, "bezeichnung" : "Fachpraxis Zeichnen", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 1, "bezeichnung" : "Fachpraxis Werkstatt", "kurs" : "", "schein": false, "cp": 4},
                {"i": 4, "modulid" : 1, "bezeichnung" : "Schnellentwurf", "fixed": true, "schein": false, "nicht": "Freie Kunst"}
            ]
        },
        {
            "modul_id" : 2,
            "Modul": "Modul 03: Praxis III",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 2, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 2, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 2, "bezeichnung" : "Fachpraxis Zeichnen", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 2, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 4},
                {"i": 4, "modulid" : 2, "bezeichnung" : "Schnellentwurf", "fixed": true, "schein": false, "nicht": "Freie Kunst"}
            ]
        },
        {
            "modul_id" : 3,
            "Modul": "Modul 04: Praxis IV",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 3, "bezeichnung" : "Atelierprojekt (Zwischenprüfung)", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 3, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 3, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 3, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 4},
                {"i": 4, "modulid" : 3, "bezeichnung" : "Schnellentwurf", "fixed": true, "schein": false, "nicht": "Freie Kunst", "cp": 16}
            ]
        },
        {
            "modul_id" : 4,
            "Modul": "Modul 05: Theorie I",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 4, "bezeichnung" : "Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 1, "modulid" : 4, "bezeichnung" : "Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 4, "bezeichnung" : "Theorie", "kurs" : "", "schein": false, "cp": 4},
                {"i": 3, "modulid" : 4, "bezeichnung" : "Theorie", "kurs" : "", "schein": false, "cp": 4}
            ]
        },
        {
            "modul_id" : 5,
            "Modul": "Modul 06: Praxis V",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 5, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 5, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 5, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 5, "bezeichnung" : "Schnellentwurf", "fixed": true, "schein": false, "nicht": "Freie Kunst"}
            ]
        },
        {
            "modul_id" : 6,
            "Modul": "Modul 07: Praxis VI",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 6, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 6, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 6, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 6, "bezeichnung" : "Schnellentwurf", "fixed": true, "schein": false, "nicht": "Freie Kunst"}
            ]
        },
        {
            "modul_id" : 7,
            "Modul": "Modul 08: Praxis VII",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 7, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 7, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 7, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 2},
                {"i": 3, "modulid" : 7, "bezeichnung" : "Schnellentwurf", "fixed": true, "schein": false, "nicht": "Freie Kunst"}
            ]
        },
        {
            "modul_id" : 8,
            "Modul": "Modul 09: Theorie II",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 8, "bezeichnung" : "Theorie", "kurs" : "", "schein" : false, "cp": 8},
                {"i": 1, "modulid" : 8, "bezeichnung" : "Theorie", "kurs" : "", "schein" : false, "cp": 8},
                {"i": 2, "modulid" : 8, "bezeichnung" : "Theorie", "kurs" : "", "schein": false, "cp": 8},
                {"i": 3, "modulid" : 8, "bezeichnung" : "Theorie", "kurs" : "", "schein": false, "cp": 8}
            ]
        },
        {
            "modul_id" : 9,
            "Modul": "Modul 10: Praxis VIII",
            "extra": "Praxismodul / Bachelor",
            "abschluesse": ["Bachelor", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 9, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 16},
                {"i": 1, "modulid" : 9, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 9, "bezeichnung" : "Fachpraxis", "kurs" : "", "schein": false, "cp": 2}
            ]
        },
        {
            "modul_id" : 10,
            "Modul": "Modul 11",
            "abschluesse": ["Master", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 10, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 24},
                {"i": 1, "modulid" : 10, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 10, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein": false, "cp": 2}
            ]
        },
        {
            "modul_id" : 11,
            "Modul": "Modul 12",
            "abschluesse": ["Master", "Diplom"],
            "module": [
                {"i": 0, "modulid" : 11, "bezeichnung" : "Atelierprojekt", "kurs" : "", "schein" : false, "cp": 24},
                {"i": 1, "modulid" : 11, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein" : false, "cp": 4},
                {"i": 2, "modulid" : 11, "bezeichnung" : "Fachpraxis/Theorie", "kurs" : "", "schein": false, "cp": 2}
            ]
        }
    ]
}