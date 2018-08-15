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
    //var instanceValue = StateModules.moduleData[vnode.attrs.id];

    return {

        oninit: function (vnode) {
            //vnode.state.id = vnode.attrs.id;
            //console.log('init', vnode.state.id);

            vnode.state.update = debounce(function (teilmodul) {
                //console.log('update', vnode.state.id, instanceValue);

                var update = {};
                update["name"] = teilmodul.name;
                update['finished'] = teilmodul.finished;
                database.ref('/users/' + firebase.uid + '/modulplan/module/' + teilmodul.id).update(update).then(function () {
                })
            }, 1000);

        },

        oncreate: function (vnode) {

            //if (!vnode.attrs.id) return;

            vnode.attrs.teilmodul.awesomplete = new Awesomplete(document.querySelector('#' + vnode.attrs.teilmodul.id), {
                list: StateLectures.lectureTitles,
                autoFirst: true
            });
            vnode.attrs.teilmodul.awesomplete.list = StateLectures.lectureTitles;
            console.log(vnode.attrs.teilmodul.awesomplete);
        },

        onupdate: function (vnode) {

            if (!vnode.attrs.teilmodul.awesomplete) return;

            vnode.attrs.teilmodul.awesomplete.list = StateLectures.lectureTitles;

        },

        view: function (vnode) {
            var teilmodul = vnode.attrs.teilmodul;
            //console.log(teilmodul.id, teilmodul.name);

            if (vnode.attrs.teilmodul.excluded === StateModules.excluded) return;

            return m('.submodule', [
                m('h3', teilmodul.typ + ' (' + teilmodul.cp + ' CP)'),
                //m('p.list-item-subtitle', teilmodul.bezeichnung),
                m('.input-group', {
                    // If active and/or filled out, set class
                    class: teilmodul.name !== '' ? 'content' : ''
                }, [
                    m('input.module-completed', {
                        id: 'radio-' + teilmodul.id,
                        checked: teilmodul.finished,
                        type: 'checkbox',
                        title: 'Schein abgegeben?',
                        onclick: m.withAttr('checked', function (checked) {
                            teilmodul.finished = checked;
                            vnode.state.update(teilmodul);
                        })
                    }),
                    m('.material-input', [
                        m('input.module-input', {
                            id: teilmodul.id,
                            value: teilmodul.name,
                            //placeholder: teilmodul.bezeichnung,
                            onchange: m.withAttr('value', function (value) {
                                teilmodul.name = value;
                                vnode.state.update(teilmodul);
                            })
                        }),
                        m('span.bar', ''),
                        m('label', {
                            for: teilmodul.id
                        }, teilmodul.bezeichnung)
                    ]),
                    m('hr.list-item-area-divider')
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
        //console.log(module.id);

        return [m(singlenav, {backurl: '/modulplan'}), m('.list-item.single-lecture ', [
            m('.list-item-header', [
                m('h2.list-item-title', module.name),
                m('hr.list-item-divider')
            ]),

            m('.submodules', module.teilmodule.map(function (teilmodul, index) {
                //console.log(teilmodul);
                return m(Teilmodul, {
                    teilmodul: teilmodul,
                    modulid: vnode.attrs.lid,
                    id: 'i' + module.id + '_' + index
                });
            }))

        ])];
    }
};

module.exports = ModulesDetail;