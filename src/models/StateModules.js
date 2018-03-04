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

function Teilmodul(typ, bezeichnung, cp, excluded, finished, name) {
    this.typ = typ;
    this.bezeichnung = bezeichnung;
    this.finished = finished;
    this.cp = cp;
    this.excluded = excluded;
    this.name = name;

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
    new Teilmodul(ap, "Bildnerische Grundlagen", 16),
    new Teilmodul(fp, freechoice, 4),
    new Teilmodul(fp, draw, 2),
    new Teilmodul(fp, workshop, 4)
];

modules.push(new Modul(0, 'Modul 01: Praxis I', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul(ap, freechoice, 16),
    new Teilmodul(fp_theo, freechoice, 4),
    new Teilmodul(fp, draw, 2),
    new Teilmodul(fp, workshop, 4),
    new Teilmodul(se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(1, 'Modul 02: Praxis II', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul(ap, freechoice, 16),
    new Teilmodul(fp_theo, freechoice, 4),
    new Teilmodul(fp, draw, 2),
    new Teilmodul(fp, freechoice, 4),
    new Teilmodul(se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(2, 'Modul 03: Praxis III', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul(ap + ' (Zwischenprüfung)', instudy, 16),
    new Teilmodul(fp_theo, freechoice, 4),
    new Teilmodul(fp, draw, 2),
    new Teilmodul(fp, freechoice, 4),
    new Teilmodul(se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(3, 'Modul 04: Praxis IV', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul(theo, 'Kunst', 4),
    new Teilmodul(theo, 'Design', 4),
    new Teilmodul(theo, 'Medien', 4),
    new Teilmodul(theo, freechoice, 4)
];

modules.push(new Modul(4, 'Modul 05: Theorie I (benotet)', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul(ap, instudy, 16),
    new Teilmodul(fp_theo, freechoice, 4),
    new Teilmodul(fp, freechoice, 2),
    new Teilmodul(se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(5, 'Modul 06: Praxis V', untermodule, [BACHELOR, DIPLOM]));

untermodule = [
    new Teilmodul(ap, freechoice, 16),
    new Teilmodul(fp, freechoice, 4),
    new Teilmodul(fp, freechoice, 2),
    new Teilmodul(se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(6, 'Modul 07: Praxis VI', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul(ap, freechoice, 16),
    new Teilmodul(fp_theo, freechoice, 4),
    new Teilmodul(fp, freechoice, 2),
    new Teilmodul(se, se, 0, FREIE_KUNST)
];

modules.push(new Modul(7, 'Modul 08: Praxis VII', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul(theo, freechoice, 8),
    new Teilmodul(theo, freechoice, 8),
    new Teilmodul(fp_ap_theo, freechoice, 8, MASTER_AUFLAGEN),
    new Teilmodul(fp_ap_theo, freechoice, 8, MASTER_AUFLAGEN)
];

modules.push(new Modul(8, 'Modul 09: Theorie II', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul(ap, instudy, 16),
    new Teilmodul(fp, freechoice, 4),
    new Teilmodul(fp, freechoice, 2)
];

modules.push(new Modul(9, 'Modul 10: Praxis VIII', untermodule, [BACHELOR, DIPLOM, MASTER_AUFLAGEN]));

untermodule = [
    new Teilmodul(ap, instudy, 24),
    new Teilmodul(fp_theo, 'Projektbegleitend', 4),
    new Teilmodul(fp_theo, 'Kurzveranstaltung', 2)
];

modules.push(new Modul(10, 'Modul 11', untermodule, [DIPLOM, MASTER_AUFLAGEN, MASTER]));

// Same modules in modul 12

modules.push(new Modul(11, 'Modul 12', untermodule, [DIPLOM, MASTER_AUFLAGEN, MASTER]));

var StateModules = {
    //receivedData: false,
    graduation: 1,
    excluded: false,

    moduleData: {},

    setModuleData: function(data) {
        StateModules.moduleData = data;
        //console.log(StateModules.moduleData);
    },

    setExcluded: function(checked, localonly) {

        if(!localonly) {
            var firebase = require('./StateFirebase');
            firebase.database.ref('/users/' + firebase.uid + '/modulplan/').update({freiekunst: checked})
        }
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

