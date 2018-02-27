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

        return [
            m(SplitView, [
                m('.wrapper-1.parent-height.flex-column', m(ModulesSummary, {lid: vnode.attrs.lid })),
                m('.wrapper-2', m('div', m(ModulesDetail, {lid: vnode.attrs.lid})))
            ])
        ];


    }
};