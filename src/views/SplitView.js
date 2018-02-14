var m = require('mithril');

module.exports = {
    view: function(vnodes) {
        return [
            console.log(vnodes),
            m('div.section-1',vnodes[0]),
            m('div.section-2',vnodes[1])
        ]
    }
}