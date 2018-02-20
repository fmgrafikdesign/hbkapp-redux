//About

module.exports = {
    oncreate: function() {
        document.title = "Einstellungen" + appTitleExt;
    },
    view: function() {
        return "I am the settings module, reporting in"
    }
};