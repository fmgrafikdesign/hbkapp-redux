//Extern

module.exports = {
    oncreate: function() {
        document.title = "Extern" + appTitleExt;
    },
    view: function() {
        return "I am the extern module, reporting in"
    }
};