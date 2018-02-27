/* require('../../awesomplete.js'); */
var m = require('mithril');
var ModulesDetail = {

    lectureTitles: [],
    awesomplete: null,

    updateLectureTitles: function(lectures) {
        //console.log('updating lecture titles...');
        ModulesDetail.lectureTitles = lectures.map(function(lecture) {
            return lecture.titel;
        });
        //console.log(ModulesDetail.lectureTitles);
    },

    oncreate: function() {

        ModulesDetail.awesomplete = new Awesomplete(document.querySelector('#awesome1'), { list: ModulesDetail.lectureTitles });
        ModulesDetail.awesomplete.list = ModulesDetail.lectureTitles;

        //console.log('oncreate');
        //console.log(ModulesDetail.lectureTitles);

        /* var awesomplete = new Awesom */
    },

    onupdate: function() {
        //console.log('onupdate');
        ModulesDetail.awesomplete.list = ModulesDetail.lectureTitles;
        //console.log(ModulesDetail.awesomplete.list);
    },

    view: function(vnode) {

        //console.log('view');
        //console.log(ModulesDetail.lectureTitles);

        return [
            m('input#awesome1')
            /*m('datalist#lectureTitles', options.map(function(option) {
                return m('option', option);
            }))*/
        ];
    }
};

module.exports = ModulesDetail;