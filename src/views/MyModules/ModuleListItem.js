var m = require('mithril');

var ModuleListItem = {
    view: function(vnode) {
        var module = vnode.attrs.module;

        var progress = module.progress();
        //console.log(vnode.attrs.lid, module.id);

        return [
            m('.module-progress', {
                style: 'width: ' + progress * 100 + '%'
            }),
            progress === 1 ? m('.module-finished', m('.icon .ion-checkmark-round')) : '',

            m('a', {
            href: '/modulplan/modul-' + module.id,
            class: 'list-item' + ((parseInt(vnode.attrs.lid) === module.id) ? ' active-module' : ''),
            oncreate: m.route.link,
            onupdate: m.route.link,
            id: module.id,
        }, [
            m('.list-item-title', module.name),
        ])];

    }
}

module.exports = ModuleListItem;