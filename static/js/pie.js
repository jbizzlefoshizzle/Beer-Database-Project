// Create the chart
var pieColors = (function () {
    var colors = [],
        base = Highcharts.getOptions().colors[0],
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.Color(base).brighten((i - 5.2) / 7).get());
    }
    return colors;
}());

Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
      text: 'San Diego Beer Breakdown'
    },
    subtitle: {
        text: '(The Beer-eakdown)'
    },
    tooltip: {
        padding: 5,
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    xAxis: {
      type: 'category'
    },
  
    legend: {
      enabled: false
    },
  
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            // text: blahl,
            // innerSize: 150, //TOGGLE DONUT!
            dataLabels: {
                enabled: true,
                // format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                // distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
  
    series: [{
      name: '% of Award-Winning Categories',
      colorByPoint: true,
      data: [{
        name: 'Pizza Port Carlsbad',
        y: 12,
        drilldown: 'Pizza Port Carlsbad'
      }, {
        name: 'AleSmith Brewing Co.',
        y: 6,
        drilldown: 'AleSmith Brewing Co.'
      }, {
        name: 'The Lost Abbey',
        y: 6,
        drilldown: 'The Lost Abbey'
      }, {
        name: 'Pizza Port Solana Beach',
        y: 6,
        drilldown: 'Pizza Port Solana Beach'
      }, {
        name: 'All Other Award-Winning SD Breweries',
        y: 54,
        drilldown: 'All Other Award-Winning SD Breweries'
      },{
        name: 'Pizza Port Ocean Beach',
        y: 6,
        drilldown: 'Pizza Port Ocean Beach'
      }]
    }],
    drilldown: {
      series: [
          { 
        name: '% Share of Brewery Medals',      
        id: 'All Other Award-Winning SD Breweries',
        data: [
          ['American-Style Amber/Red Ale', 4],
          ['American-Style Brown Ale', 4],
          ['American-Belgo-Style Ale', 3],
          ['American-Style Black Ale', 2],
          ['American-Style India Black Ale', 1],
          ['American-Style India Pale Ale', 2],
          ['American-Style Pale Ale', 2],
          ['American-Style Sour Ale', 5],
          ['American-Style Stout', 3],
          ['American-Style Strong Pale Ale', 3],
          ['Baltic-Style Porter', 1],
          ['Belgian-Style Abbey Ale', 2],
          ['Belgian-Style Lambic or Sour Ale', 1],
          ['Belgian-Style Witbier', 1],
          ['Bock', 2],
          ['Bohemian-Style Pilsener', 2],
          ['Chili Beer', 2],
          ['Chocolate Beer', 1],
          ['Classic Irish-Style Dry Stout', 2],
          ['Coffee Beer', 2],
          ['English Style Brown Ale', 1],
          ['English-Style Summer Ale', 3],
          ['Extra Special Bitter', 1],
          ['French- and Belgian-Style Saison', 1],
          ['Fruit Beer or Field Beer', 2],
          ['Fruited American-Style Sour Ale', 1],
          ['German-Style Doppelbock or Eisbock', 1],
          ['German-Style Wheat Ale', 1],
          ['Golden or Blonde Ale', 1],
          ['Herb and Spice or Chocolate Beer', 1],
          ['Historical Beer', 1],
          ['Honey Beer', 1],
          ['Imperial India Pale Ale', 3],
          ['Imperial Red Ale', 1],
          ['Imperial Stout', 1],
          ['Indigenous Beer', 2],
          ['International-Style Pale Ale', 2],
          ['Irish-Style Red Ale', 3],
          ['Oatmeal Stout', 1],
          ['Old Ale or Strong Ale', 1],
          ['Other Belgian-Style Ale', 3],
          ['Other Strong Beer', 1],
          ['Out of Category / Traditionally Brewed Beer', 2],
          ['Robust Porter', 2],
          ['Rye Beer', 1],
          ['Scotch Ale', 1],
          ['Session Beer', 5],
          ['Session India Pale Ale', 3],
          ['South German-Style Hefeweizen', 2],
          ['Specialty Beer', 1],
          ['Wood- and Barrel-Aged Beer', 1],
          ['Wood- and Barrel-Aged Sour Beer', 1],
          ['Wood- and Barrel-Aged Strong Beer', 1],
          ['Wood- and Barrel-Aged Strong Stout', 1]
        ]
      }, {
        name: '% Share of Brewery Medals',
        id: 'Pizza Port Carlsbad',
        data: [
          ['American Style Brown Ale', 2],
          ['Belgian Style Strong Specialty Ale', 3],
          ['Classic Irish Style Dry Stout', 1],
          ['Coffee Beer', 2],
          ['English Style Brown Ale', 3],
          ['English Style India Pale Ale', 2],
          ['Export Stout', 2],
          ['Imperial Red Ale', 3],
          ['Imperial Stout', 1],
          ['Scotch Ale', 2],
          ['Session Beer', 2],
          ['Sweet Stout', 1]
        ]
      }, {
        name: '% Share of Brewery Medals',
        id: 'AleSmith Brewing Co.',
        data: [
          ['American-Style Strong Pale Ale', 1],
          ['Barley Wine-Style Ale', 4],
          ['Belgian-Style Abbey Ale', 1],
          ['Belgian-Style Strong Specialty Ale', 1],
          ['Old Ale or Strong Ale', 2],
          ['Scotch Ale', 1]
        ]
      }, {
        name: '% Share of Brewery Medals',
        id: 'The Lost Abbey',
        data: [
          ['Wood- and Barrel-Aged Sour Beer (collab with Port Brewing Co.)', 1],
          ['American-Style Sour Ale', 4],
          ['Belgian and French-Style Ale', 2],
          ['Belgian-Style Lambic or Sour Ale', 1],
          ['Experimental Beer', 1],
          ['Wood- and Barrel-Aged Sour Beer', 1]
        ]
      }, {
        name: '% Share of Brewery Medals',
        id: 'Pizza Port Solana Beach',
        data: [
          ['American-Style Stout', 1],
          ['Classic Irish-Style Dry Stout', 1],
          ['Double Red Ale', 1],
          ['English-Style Mild Ale', 1],
          ['Imperial Red Ale', 1],
          ['Oatmeal Stout', 3]
        ]
      }, {
        name: '% Share of Brewery Medals',
        id: 'Pizza Port Ocean Beach',
        data: [
          ['Coffee Beer', 1],
          ['English-Style Mild Ale', 2],
          ['Foreign-Style Stout', 1],
          ['Belgian-Style Strong Specialty Ale', 1],
          ['Imperial Red Ale', 1],
          ['Session Beer', 2]
        ]
      }
      ]//end series
    }
  });
  