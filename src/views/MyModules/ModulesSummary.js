var m = require('mithril');
var spinner = require('../LoadingSpinner');
var firebase = require('../../models/StateFirebase');
var LoginPrompt = require('../LoginPrompt');
var StateModules = require('../../models/StateModules');
var ModuleListItem = require('./ModuleListItem');

var ModulesSummary = {
    view: function(vnode) {

        if(!firebase.loggedIn) return m(LoginPrompt);

        var modules = StateModules.modules;
        //console.log(modules);

        return m('.module-list', modules.map(function(module) {
            //console.log(module.id);
            return m('.list-item-wrapper', m('.module-list-item', m(ModuleListItem, {module: module, lid: vnode.attrs.lid})));
        }));
    }
};

module.exports = ModulesSummary;