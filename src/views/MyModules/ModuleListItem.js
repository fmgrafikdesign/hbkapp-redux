var m = require('mithril');

var ModuleListItem = {
    view: function(vnode) {
        var module = vnode.attrs.module;

        console.log(vnode.attrs.lid, module.id);

        return m('a', {
            href: '/modulplan/modul-' + module.id,
            class: 'list-item' + ((parseInt(vnode.attrs.lid) === module.id) ? ' active-module' : ''),
            oncreate: m.route.link,
            onupdate: m.route.link,
            id: module.id,
            onclick: function () {
                //StateLectures.setActive(lecture.id);
                document.getElementById('split-view-controller').classList.add('second-screen');
                //StateLectures.state.secondScreen = true;
            }
        }, [
            m('.list-item-title', module.name)
        ]);

    }
}

module.exports = ModuleListItem;