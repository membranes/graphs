
var Highcharts;
var url = "https://raw.githubusercontent.com/preliminaries/preliminaries.github.io/develop/graphs/source/travel_type.json";


// Generate curves
jQuery.getJSON(url,
    function (source) {

        // Indices
        let columns = source.columns;
        let id = columns.indexOf('id'),
            pa = columns.indexOf('parent'),
            na = columns.indexOf('name'),
            de = columns.indexOf('description');

        // Data
        let data = [];
        for (let i = 0; i < source.data.length; i += 1) {

            // parent, child
            data.push({
                id: source.data[i][id],
                parent: source.data[i][pa],
                name: source.data[i][na],
                description: source.data[i][de]
            });

        }


        Highcharts.chart('container', {
            chart: {
                inverted: false,
                height: 300,
                width: 290,
                marginTop: 85,
                marginLeft: 85
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Proposal: Travel Type',
                align: 'left'
            },
            subtitle: {
                text: 'Climate & Sustainability',
                align: 'left'
            },
            plotOptions: {
                treegraph: {
                    dataLabels: {
                        shape: 'callout',
                        enabled: true,
                        style: {
                            whiteSpace: 'pre-wrap',
                            width: 65,
                            textOverflow: 'ellipsis',
                            color: 'rgba(0, 0, 0, .65)'
                        }
                        // format: '<b>{point.name}</b>: {point.description}
                    }
                }
            },
            caption: {
                verticalAlign: "bottom",
                y: 30,
                x: 25,
                text: '<p>A <b>travel type options</b> proposal, for classifying distinct trips.</p>'
            },
            series: [
                {
                    type: 'treegraph',
                    data: data,
                    tooltip: {
                        pointFormat: '{point.description}'
                    },
                    dataLabels: {
                        pointFormat: '{point.name}',
                        crop: false
                    },
                    marker: {
                        radius: 6
                    },
                    levels: [
                        {
                            level: 1,
                            color: 'rgba(0, 0, 0, .95)',
                            dataLabels: {
                                align: 'left',
                                verticalAlign: 'bottom',
                                x: -5,
                                y: 13.5
                            }
                        },
                        {
                            level: 2,
                            color: 'rgba(0, 0, 0, .80)',
                            collapsed: false,
                            colorVariation: {
                                key: 'brightness',
                                to: -0.5
                            },
                            dataLabels: {
                                verticalAlign: 'bottom',
                                rotation: 0,
                                y: 13.5
                            }
                        }
                    ]
                }
            ]
        });

    });