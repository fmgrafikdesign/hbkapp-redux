var m = require('mithril');

function Modul(id, name, teilmodule, abschluesse) {
    this.id = id;
    this.name = name;
    this.teilmodule = teilmodule;
    this.abschluesse = abschluesse;
    this.finished = false;

    var teilm = this.teilmodule;

    this.progress = function() {
        var progress = 0;
        teilm.forEach(function(teilmodul) {
            if(teilmodul.finished) {
                return progress += 1/teilm.length;
            }
        });

        //console.log(progress);

        return progress;
    }

}

function Teilmodul(id, typ, bezeichnung, cp, excluded, finished) {
    this.id = id;
    this.typ = typ;
    this.bezeichnung = bezeichnung;
    this.finished = finished;
    this.cp = cp;
    this.excluded = excluded;
    this.name = '';

}

const BACHELOR = 1;
const DIPLOM = 2;
const MASTER = 3;
const MASTER_AUFLAGEN = 4;
const FREIE_KUNST = 5;

const ap = "Atelierprojekt";
const fp = "Fachpraxis";
const fp_theo = "Fachpraxis oder Theorie";
const se = "Schnellentwurf";
const theo = "Theorie (benotet)";
const fp_ap_theo = "Theorie oder Fachpraxis oder AP kurz"

const freechoice = "Wahl aus dem Hochschulangebot";
const draw = "Zeichnen";
const workshop = "Werkstatt";
const instudy = "Im Studiengang";

var modules = [];
var untermodule = [];

untermodule = [
    new Teilmodul("i0_0", ap, "Bildnerische Grundlagen", 16),
    new Teilmodul("i0_1", fp, freechoice, 4),
    new Teilmodul("i0_2", fp, draw, 2),
    new Teilmodul("i0_3", fp, workshop, 4)
];

modules.push(new Modul(1, 'Modul 01: Praxis I', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul("i1_0", ap, freechoice, 16),
    new Teilmodul("i1_1", fp_theo, freechoice, 4),
    new Teilmodul("i1_2", fp, draw, 2),
    new Teilmodul("i1_3", fp, workshop, 4),
    new Teilmodul("i1_4", se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(2, 'Modul 02: Praxis II', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul("i2_0", ap, freechoice, 16),
    new Teilmodul("i2_1", fp_theo, freechoice, 4),
    new Teilmodul("i2_2", fp, draw, 2),
    new Teilmodul("i2_3", fp, freechoice, 4),
    new Teilmodul("i2_4", se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(3, 'Modul 03: Praxis III', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul("i3_0", ap + ' (Zwischenprüfung)', instudy, 16),
    new Teilmodul("i3_1", fp_theo, freechoice, 4),
    new Teilmodul("i3_2", fp, draw, 2),
    new Teilmodul("i3_3", fp, freechoice, 4),
    new Teilmodul("i3_4", se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(4, 'Modul 04: Praxis IV', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul("i4_0", theo, 'Kunst', 4),
    new Teilmodul("i4_1", theo, 'Design', 4),
    new Teilmodul("i4_2", theo, 'Medien', 4),
    new Teilmodul("i4_3", theo, freechoice, 4)
];

modules.push(new Modul(5, 'Modul 05: Theorie I (benotet)', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul("i5_0", ap, instudy, 16),
    new Teilmodul("i5_1", fp_theo, freechoice, 4),
    new Teilmodul("i5_2", fp, freechoice, 2),
    new Teilmodul("i5_3", se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(6, 'Modul 06: Praxis V', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul("i6_0", ap, freechoice, 16),
    new Teilmodul("i6_1", fp, freechoice, 4),
    new Teilmodul("i6_2", fp, freechoice, 2),
    new Teilmodul("i6_3", se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(7, 'Modul 07: Praxis VI', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul("i7_0", ap, freechoice, 16),
    new Teilmodul("i7_1", fp_theo, freechoice, 4),
    new Teilmodul("i7_2", fp, freechoice, 2),
    new Teilmodul("i7_3", se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(8, 'Modul 08: Praxis VII', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul("i8_0", theo, freechoice, 8),
    new Teilmodul("i8_1", theo, freechoice, 8),
    new Teilmodul("i8_2", fp_ap_theo, freechoice, 8, MASTER_AUFLAGEN),
    new Teilmodul("i8_3", fp_ap_theo, freechoice, 8, MASTER_AUFLAGEN)
];

modules.push(new Modul(9, 'Modul 09: Theorie II', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul("i9_0", ap, instudy, 16),
    new Teilmodul("i9_1", fp, freechoice, 4),
    new Teilmodul("i9_2", fp, freechoice, 2)
];

modules.push(new Modul(10, 'Modul 10: Praxis VIII', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul("i10_0", ap, instudy, 24),
    new Teilmodul("i10_1", fp_theo, 'Projektbegleitend', 4),
    new Teilmodul("i10_2", fp_theo, 'Kurzveranstaltung', 2)
];

modules.push(new Modul(11, 'Modul 11', untermodule, [DIPLOM, MASTER_AUFLAGEN, MASTER]));

untermodule = [
    new Teilmodul("i11_0", ap, instudy, 24),
    new Teilmodul("i11_1", fp_theo, 'Projektbegleitend', 4),
    new Teilmodul("i11_2", fp_theo, 'Kurzveranstaltung', 2)
];

modules.push(new Modul(12, 'Modul 12', untermodule, [DIPLOM, MASTER_AUFLAGEN, MASTER]));

var StateModules = {
    //receivedData: false,
    graduation: 1,
    excluded: false,

    moduleData: {},

    setModuleData: function(data) {
        StateModules.moduleData = data;
        //console.log(StateModules.moduleData);

        StateModules.modules.forEach(function(module) {
            module.teilmodule.forEach(function(teilmodul) {
                if(data[teilmodul.id]) {
                    teilmodul.name = data[teilmodul.id];
                    //console.log(teilmodul.id);
                }
            })
        });

    },

    setExcluded: function(checked, localonly) {

        if(!localonly) {
            var firebase = require('./StateFirebase');
            firebase.database.ref('/users/' + firebase.uid + '/modulplan/').update({freiekunst: checked})
        }
        console.log(checked);
        return checked ? StateModules.excluded = 5 : StateModules.excluded = false;
    },
    setGraduation: function(graduation, localonly) {
        if(!localonly) {
            var firebase = require('./StateFirebase');
            firebase.database.ref('/users/' + firebase.uid + '/modulplan/').update({graduation: graduation})
        }
        StateModules.graduation = graduation;
    },
    modules: modules,

    getModule: function(id) {
        var mod = StateModules.modules.find( function(module) {
            return module.id === parseInt(id);
        } );

        return mod;
    }
};

module.exports = StateModules;

