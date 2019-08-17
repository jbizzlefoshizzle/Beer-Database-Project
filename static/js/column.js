// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'San Diego Beer Breakdown'
    },
    subtitle: {
        text: '(The Bar-eakdown)'
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total percent share of medals'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of medals<br/>'
    },

    series: [
        {
            name: "Breweries",
            colorByPoint: true,
            data: [
                {
                    name: 'Pizza Port Carlsbad',
                    y: 13.3,
                    drilldown: 'Pizza Port Carlsbad'
                },
                {
                    name: 'AleSmith Brewing Co.',
                    y: 6.7,
                    drilldown: 'AleSmith Brewing Co.'
                },
                {
                    name: 'Pizza Port Solana Beach',
                    y: 6.7,
                    drilldown: 'Pizza Port Solana Beach'
                },
                {
                    name: 'Pizza Port Ocean Beach',
                    y: 6.7,
                    drilldown: 'Pizza Port Ocean Beach'
                },
                {
                    name: 'The Lost Abbey',
                    y: 6.7,
                    drilldown: 'The Lost Abbey'
                },
                {
                    name: 'All 46 Other Award-Winning SD Breweries',
                    y: 60.0,
                    drilldown: 'All Other Award-Winning SD Breweries'
                }
            ] //end data
        }
    ],
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
            ['American Style Brown Ale', 8.3],
            ['Belgian Style Strong Specialty Ale', 12.5],
            ['Classic Irish Style Dry Stout', 4.2],
            ['Coffee Beer', 8.3],
            ['English Style Brown Ale', 12.5],
            ['English Style India Pale Ale', 8.3],
            ['Export Stout', 8.3],
            ['Imperial Red Ale', 12.5],
            ['Imperial Stout', 4.2],
            ['Scotch Ale', 8.3],
            ['Session Beer', 8.3],
            ['Sweet Stout', 8.3]
          ]
        }, {
          name: '% Share of Brewery Medals',
          id: 'AleSmith Brewing Co.',
          data: [
            ['American-Style Strong Pale Ale', 10],
            ['Barley Wine-Style Ale', 40],
            ['Belgian-Style Abbey Ale', 10],
            ['Belgian-Style Strong Specialty Ale', 10],
            ['Old Ale or Strong Ale', 20],
            ['Scotch Ale', 10]
          ]
        }, {
          name: '% Share of Brewery Medals',
          id: 'The Lost Abbey',
          data: [
            ['Wood- and Barrel-Aged Sour Beer (collab with Port Brewing Co.)', 10],
            ['American-Style Sour Ale', 40],
            ['Belgian and French-Style Ale', 20],
            ['Belgian-Style Lambic or Sour Ale', 10],
            ['Experimental Beer', 10],
            ['Wood- and Barrel-Aged Sour Beer', 10]
          ]
        }, {
          name: '% Share of Brewery Medals',
          id: 'Pizza Port Solana Beach',
          data: [
            ['American-Style Stout', 12.5],
            ['Classic Irish-Style Dry Stout', 12.5],
            ['Double Red Ale', 12.5],
            ['English-Style Mild Ale', 12.5],
            ['Imperial Red Ale', 12.5],
            ['Oatmeal Stout', 37.5]
          ]
        }, {
          name: '% Share of Brewery Medals',
          id: 'Pizza Port Ocean Beach',
          data: [
            ['Coffee Beer', 12.5],
            ['English-Style Mild Ale', 25],
            ['Foreign-Style Stout', 12.5],
            ['Belgian-Style Strong Specialty Ale', 12.5],
            ['Imperial Red Ale', 12.5],
            ['Session Beer', 25]
          ]
        }
        ]//end series
    } //end drilldown
});