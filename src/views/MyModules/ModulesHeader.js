var m = require('mithril');
var StateModules = require('../../models/StateModules');

var ModulesHeader = {

    controller: function () {
        var self = this;

    },

    infoCheckbox: function(checked) {
        console.log('infoCheckbox', checked );
        if(!document.getElementById('checkbox-fk')) return;

        console.log(document.getElementById('checkbox-fk').checked);
    },

    view: function (vnode) {

        var graduations = ['Bachelor', 'Diplom', 'Master', 'Master mit Auflagen'];

        //console.log('redrawing modules header');
        graduations = graduations.map(function (graduation, index) {
            // TODO Add check from StateModules for saved graduation
            //return m('option' + (false) ? '[selected=true]' : '.inactive', graduation)
            //console.log(index+1, StateModules.graduation);
            return m('option' + (index+1 === StateModules.graduation ? '[selected=true]' : '') , {value: index+1}, graduation)
        });

        return m('.list-header', m('.lectures-filter', [

                m('.modules-filter-graduation', [

                    m('label[for=graduation]', 'Angestrebter Abschluss: '),

                        m('select#graduation.filter.parent-height', {
                            onchange: m.withAttr('value', function (value) {
                                StateModules.setGraduation(value);
                            })
                        }, graduations)
                    ]
                ),

                m('.modules-filter-fk', [
                        m('label[for=checkbox-fk]', {
                            /*onclick: ModulesHeader.infoCheckbox*/
                        }, 'Ich studiere Freie Kunst'),
                        m('input#checkbox-fk', {
                            type: 'checkbox',
                            checked: StateModules.excluded === 5,
                            value: 4,
                            onclick: m.withAttr('checked', function(checked) {
                                StateModules.setExcluded(checked);
                            })
                            }
                        )
                    ]
                )
            ]
            )
        )
    }
};

module.exports = ModulesHeader;
