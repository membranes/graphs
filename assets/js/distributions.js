// Declarations
var Highcharts;


// Generate curves
jQuery.getJSON('../../temporary.json', function (source){

	// Numbers
	let categories = source.categories;

	// Numbers
	Highcharts.setOptions({
		lang: {
			thousandsSep: ','
		}
	});


	// Draw
	Highcharts.chart('container', {

		chart: {
			type: 'bar'
		},

		title: {
			text: 'The distribution of the training, validating,<br>and testing data.',
			align: 'left'
		},

		xAxis: {
			categories: categories
		},

		yAxis: {
			allowDecimals: false,
			min: 0,
			title: {
				text: 'Count: Text Pieces'
			}
		},

		tooltip: {
			format: '<b>{key}</b><br/>{series.name}: {y} ({point.percentage:.2f}%)<br/>' +
				'Total # of visible bar items: {point.stackTotal}'
		},

		plotOptions: {
			series: {
				stacking: 'normal',
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.0f}%'
				}
			}
		},

		series: source.series
	});

});



