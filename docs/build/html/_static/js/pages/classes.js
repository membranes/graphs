var Highcharts;

var url = "https://raw.githubusercontent.com/prml-0004/abstracts/refs/heads/master/warehouse/classes.json"


// Generate curves
jQuery.getJSON(url, function (source){

    // Indices
    let columns = source.columns;
    var pa = columns.indexOf('parent_desc'),
        ch = columns.indexOf('child_desc'),
        de = columns.indexOf('notes');

    // Data
    var data = [];
    for (var i = 0; i < source.data.length; i += 1){

        // parent, child, name
        data.push([
            source.data[i][pa], source.data[i][ch], source.data[i][de]
        ]);

    }


    // Add the nodes option through an event call. We want to start with the parent
    // item and apply separate colors to each child element, then the same color to
    // grandchildren.
    Highcharts.addEvent(Highcharts.Series, 'afterSetOptions',
        function (e) {
            var colors = Highcharts.getOptions().colors,
                i = 0,
                nodes = {};

            if (
                this instanceof Highcharts.Series.types.networkgraph &&
                e.options.id === 'segments'
            ) {
                e.options.data.forEach(function (link) {

                    if (link[0] === 'Class') {
                        nodes['Class'] = {
                            id: 'Class',
                            marker: {
                                radius: 32
                            }
                        };
                        nodes[link[1]] = {
                            id: link[1],
                            marker: {
                                radius: 16
                            },
                            color: colors[i++]
                        };
                    } else if (nodes[link[0]] && nodes[link[0]].color) {
                        nodes[link[1]] = {
                            id: link[1],
                            color: nodes[link[0]].color
                        };
                    }
                });

                e.options.nodes = Object.keys(nodes).map(function (id) {
                    return nodes[id];
                });
            }
        }
    );

    Highcharts.chart('container0002', {
        chart: {
            type: 'networkgraph',
            height: '100%',
            marginTop: -85
        },
        title: {
            text: 'Detection & Redaction Targets',
            align: 'left'
        },
        subtitle: {
            text: 'Visit: <a href="https://github.com/prml-0004/library/blob/master/src/02-model/performance/03-schemes.md#annotation-schemes--modelling" target="_blank">Annotation Scheme for Modelling</a>',
            align: 'left'
        },
        plotOptions: {
            networkgraph: {
                keys: ['from', 'to', 'name'],
                layoutAlgorithm: {
                    enableSimulation: true,
                    friction: -0.9
                },
                tooltip: {
                    pointFormat: '{point.name}'
                }
            }
        },
        series: [{
            accessibility: {
                enabled: false
            },
            dataLabels: {
                enabled: true,
                linkFormat: '',
                style: {
                    fontSize: '0.8em',
                    fontWeight: 'normal'
                }
            },
            id: 'segments',
            data: data
        }]
    });

});