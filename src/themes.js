var m = require('mithril');
var globals = require('./globals');

// Load theme from localStorage if available
var currentTheme = 'default';

if(storageAvailable('localStorage')) {
    if(localStorage.getItem('currentTheme')) {
        currentTheme = localStorage.getItem('currentTheme');
    }
}

var allthemes = [
    {
        'name': 'Standard',
        'slug': 'default',
        'vars': {
            '--background2': '#fff',
            '--bodybackground': '#f0f0fa',
            '--inputborder': '#ddd',
            '--maincolor': '#000',
            '--headings': '#111',
            '--subtitles': '#666',
            '--links': '#c00000',
            '--menucolor': '#fff',
            '--dividers': '#ddd'
        }
    },
    {
        'name': 'Dark',
        'slug': 'dark',
        'vars': {
            '--background2': '#212126',
            '--bodybackground': '#121215',
            '--inputborder': '#212121',
            '--maincolor': '#e0e0e0',
            '--headings': '#eaeaea',
            '--subtitles': '#bdbdbd',
            '--links': '#47b8ff',
            '--menucolor': '#fff',
            '--dividers': '#ddd'
        }
    }
];

var Themes = {
    current_theme: currentTheme,
    available_themes: allthemes,

    applyTheme: function(themeslug) {
        var newtheme = Themes.available_themes.find( function(theme) {
            return theme.slug === themeslug;
        } );

        if(!newtheme) {
            console.log('The desired theme could not be found.');
            return;
        }

        var root = document.querySelector(':root');
        var themevars = newtheme.vars;
        var keys = Object.keys(themevars)
        for(var i = 0; i < keys.length; i++) {
            var key = keys[i];
            //console.log(themevars[key]);
            root.style.setProperty(key, themevars[key]);
        }

        Themes.current_theme = themeslug;
        if(storageAvailable('localStorage')) {
            currentTheme = localStorage.setItem('currentTheme', themeslug);
        }

        //console.log('applied theme "' + newtheme.name + '"');
    }

};

// Apply current theme to html
Themes.applyTheme(currentTheme);

module.exports = Themes;