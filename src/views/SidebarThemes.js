var m = require('mithril');
var themes = require('../themes');

/* Creates an select element with all available themes. Upon selecting a theme, it gets applied to the site. */

var ThemeSelection = {
    // Create options for select based on available themes
    options: [],
    oncreate: function () {
        ThemeSelection.options = themes.available_themes.map(function (theme) {
            return m('option' + (themes.current_theme === theme.slug ? '[selected=true]' : '.inactive'), {
                value: theme.slug,
            }, theme.name)
        });
    },
    view: function () {

        return m('.d-flex.align-items-center.theme-select-wrapper', [
                m('label.theme-select-label', {for: 'theme-selection'}, 'Theme: '),

                m('select.filter', {
                    onchange: m.withAttr('value', function (value) {
                        themes.applyTheme(value);
                    }),
                    id: 'theme-selection'
                }, ThemeSelection.options)
            ]
        )
    }
};

module.exports = ThemeSelection;