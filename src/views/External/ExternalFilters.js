var m = require('mithril');

module.exports = {
    view: function (vnode) {

        var filter = vnode.attrs.filter;
        //console.log(filter);

        var studies = filter.studies;

        var select_studies_options = studies.map(function (study, index) {
            //Select if the option index matches the current studyIndex
            return m('option' + (filter.studyIndex === index ? '[selected=true]' : '.inactive' ),
                {
                    onclick: function () {
                        filter.setStudyIndex(index);
                    }
                },
                study);
        });

        return m('.lectures-filter', [
                // Search / Filter by text
                m('.lectures-filter-search', m('input.filter.lectures-filter-search', {
                    oninput: m.withAttr("value", function (value) {
                        filter.search = value;
                    }),
                    value: filter.search,
                    placeholder: 'Suchen...'
                })),

                // Filter by allowed studies
                m('.lectures-filter-studies', m('select.filter.lectures-filter-studies', {
                    onchange: m.withAttr('selectedIndex', function (selectedIndex) {
                        filter.setStudyIndex(selectedIndex);
                    })
                }, select_studies_options)),

                // Sort by date, name or reverse date
                m('.lectures-filter-sort',
                    m('select.filter.lectures-filter-sort', {
                            onchange: m.withAttr('value', function (value) {
                                console.log(value);
                                filter.setSort(value);
                            })
                        }, [
                            m('option' + (filter.sort === 'newest_first' ? '[selected=true]' : '.inactive'), {value: 'newest_first'}, 'Neueste zuerst'),
                            m('option' + (filter.sort === 'name' ? '[selected=true]' : '.inactive'), {value: 'name'}, 'Name A - Z'),
                            m('option' + (filter.sort === 'oldest_first' ? '[selected=true]' : '.inactive'), {value: 'oldest_first'}, 'Älteste zuerst')
                        ]
                    )
                )
            ]
        )
    }
};
