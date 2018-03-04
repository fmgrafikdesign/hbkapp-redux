//Modules

var m = require('mithril');
var State = require("../../models/StateUser");
var SplitView = require('../SplitView');
var ModulesSummary = require('./ModulesSummary');
var ModulesDetail = require('./ModulesDetail');

module.exports = {

    oncreate: function() {
        document.title = "Modulplan" + appTitleExt;
    },

    view: function(vnode) {

        var secondscreen = m('.wrapper-2', m('div', m(ModulesDetail, {lid: vnode.attrs.lid})));

        if(!vnode.attrs.lid) {
            secondscreen = m('.wrapper-2');
        }

        //console.log(secondscreen);

        return [
            m(SplitView, [
                m('.wrapper-1.parent-height.flex-column', m(ModulesSummary, {lid: vnode.attrs.lid })),
                secondscreen
            ])
        ];


    }
};