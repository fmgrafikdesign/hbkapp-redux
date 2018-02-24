var m = require('mithril');
var Sidebar = require('./Sidebar');
var Slideout = require('slideout');

// var slide = new Slideout({
//     'panel': document.getElementById('panel'),
//     'menu': document.getElementById('menu'),
//     'padding': 256,
//     'tolerance': 70
// });


module.exports = {
    // Add sidebar functionality

    oncreate: function () {
        var slide = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70,
            'touch': false
        });

        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function () {
            slide.toggle();
        });


        // Add class change listener

        // var links = document.getElementsByClassName('sidebar-link');
        //
        // for (var i = 0; i < links.length; i++) {
        //     links[i].addEventListener('click', function(event) {
        //         event.target.classList.add('myclass');
        //     })
        // }


    },
    view: function (vnode) {
        //console.log("vnode view");
        //console.log(vnode);
        return [
            m(Sidebar),
            m('button.toggle-button', m('i.icon.ion-navicon')),
            m("main#panel.layout.parent-height", [
                m("section.parent-height", vnode.children)
            ])
        ]
    }
}
