/* require('../../awesomplete.js'); */
var m = require('mithril');
var StateModules = require('../../models/StateModules');
var singlenav = require('../singlenav');
var StateLectures = require('../../models/StateLectures');
var firebase = require('../../models/StateFirebase');
var database = firebase.database;

require('../../awesomplete.min.js');

function Teilmodul(vnode) {

    //console.log(StateModules.moduleData[vnode.attrs.id]);
    var instanceValue = StateModules.moduleData[vnode.attrs.id];

    return {

        oninit: function (vnode) {
            vnode.state.id = vnode.attrs.id;
            console.log('init', vnode.state.id);

            vnode.state.update = debounce(function (vnode) {
                console.log('update', vnode.state.id, instanceValue);
                var update = {};
                update[vnode.state.id] = instanceValue;
                database.ref('/users/' + firebase.uid + '/modulplan/module/').update(update).then(function () {

                })
            }, 1000);

        },

        oncreate: function (vnode) {

            //if (!vnode.attrs.id) return;

            vnode.state.awesomplete = new Awesomplete(document.querySelector('#' + vnode.attrs.id), {
                list: StateLectures.lectureTitles,
                autoFirst: true
            });
            vnode.state.awesomplete.list = StateLectures.lectureTitles;

        },

        onupdate: function (vnode) {

            if (!vnode.state.awesomplete) return;

            vnode.state.id = vnode.attrs.id;
            //console.log('onupdate', vnode.state.id);
            //vnode.state.awesomplete.list = StateLectures.lectureTitles;
            //console.log(ModulesDetail.awesomplete.list);
        },

        view: function (vnode) {
            var teilmodul = vnode.attrs.teilmodul;

            if (vnode.attrs.teilmodul.excluded === StateModules.excluded) return;

            return m('.submodule', [
                m('h3', teilmodul.typ + ' (' + teilmodul.cp + ' CP) ' + vnode.state.id),
                m('p.list-item-subtitle', teilmodul.bezeichnung),
                m('.input-group', [
                    m('input.module-input', {
                        id: vnode.attrs.id,
                        value: instanceValue,
                        oninput: m.withAttr('value', function (value) {
                            instanceValue = value;
                            vnode.state.update(vnode);
                        })
                    })
                ])
            ])

        }
    }
};

var ModulesDetail = {

    updateLectureTitles: function (lectures) {
        //console.log('updating lecture titles...');
        ModulesDetail.lectureTitles = lectures.map(function (lecture) {
            return lecture.titel;
        });
        //console.log(ModulesDetail.lectureTitles);
    },

    view: function (vnode) {

        if (!vnode.attrs.lid) return;

        var module = StateModules.getModule(vnode.attrs.lid);

        if (!module) return;

        //console.log('view');
        //console.log(ModulesDetail.lectureTitles);

        return [m(singlenav, {backurl: '/modulplan'}), m('.list-item.single-lecture ', [
            m('.list-item-header', [
                m('h2.list-item-title', module.name),
                m('hr.list-item-divider')
            ]),

            m('.submodules', module.teilmodule.map(function (teilmodul, index) {
                return m(Teilmodul, {teilmodul: teilmodul, id: 'i' + module.id + '_' + index});
            }))

        ])];
    }
};

module.exports = ModulesDetail;