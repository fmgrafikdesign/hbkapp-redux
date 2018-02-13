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

    oncreate: function() {
        var slide = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('menu'),
            'padding': 256,
            'tolerance': 70
        });

        // Toggle button
        document.querySelector('.toggle-button').addEventListener('click', function() {
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
        return [
                m(Sidebar),
                m("main#panel.layout", [
                    m('header', [
                        m('button.toggle-button', '☰')
                    ]),
                    m("section", vnode.children)
                ])
            ]
    }
}
