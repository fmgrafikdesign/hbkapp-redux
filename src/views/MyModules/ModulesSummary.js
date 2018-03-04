var m = require('mithril');
var spinner = require('../LoadingSpinner');
var firebase = require('../../models/StateFirebase');
var LoginPrompt = require('../LoginPrompt');
var StateModules = require('../../models/StateModules');
var ModuleListItem = require('./ModuleListItem');
var ModulesHeader = require('./ModulesHeader');

var ModulesSummary = {
    view: function(vnode) {

        if(!firebase.loggedIn) return m(LoginPrompt);

        var modules = StateModules.modules;
        //console.log(modules);

        return [m(ModulesHeader) , m('.module-list', modules.map(function(module) {

            // If the selected graduation doesn't require the module, disable it.
            if(!module.abschluesse.find(function(abschluss) { return parseInt(abschluss) === parseInt(StateModules.graduation) })) return;
            return m('.list-item-wrapper', m('.module-list-item', m(ModuleListItem, {module: module, lid: vnode.attrs.lid})));
        }))];
    }
};

module.exports = ModulesSummary;