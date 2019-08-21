Highcharts.addEvent(
    Highcharts.seriesTypes.networkgraph,
    'afterSetOptions',
    function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};
        e.options.data.forEach(function (link) {

            if (link[0] === 'San Diego') {
                nodes['San Diego'] = {
                    id: 'San Diego',
                    marker: {
                        radius: 20
                    },
                    color: colors[i++]
                };
                nodes[link[1]] = {
                    id: link[1],
                    marker: {
                        radius: 10
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
);

Highcharts.chart('container', {
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: 'All Beers and Breweries in San Diego'
    },
    subtitle: {
        text: '(and why we narrowed it down)'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                friction: -0.9
            }
        }
    },
    series: [{
        dataLabels: {
            enabled: true,
            linkFormat: ''
        },
        data: [
            ['San Diego', 'AleSmith Brewing Co.'],
            ['San Diego', 'Alpine Beer Co.'],
            ['San Diego', 'BNS Brewing & Distilling Co.'],
            ['San Diego', 'Bagby Beer Co.'],
            ['San Diego', 'Ballast Point Brewing & Spirits - Scripps Ranch'],
            ['San Diego', 'Ballast Point Brewing Co.'],
            ['San Diego', 'Ballast Point Brewing Co. - Home Brew Mart'],
            ['San Diego', 'Benchmark Brewing Co.'],
            ['San Diego', 'Breakwater Brewing Co.'],
            ['San Diego', 'Brit Antrim Benefit Beer Pizza Port Ocean Beach'],
            ['San Diego', 'Burgeon Beer Co.'],
            ['San Diego', 'Coronado Brewing Company Brewpub'],
            ['San Diego', 'Culture Brewing Co.'],
            ['San Diego', 'Duck Foot Brewing Co.'],
            ['San Diego', 'Eppig Brewing'],
            ['San Diego', 'Green Flash Brewing Co.'],
            ['San Diego', 'Groundswell Brewing Co.'],
            ['San Diego', 'Home Brewing Co.'],
            ['San Diego', 'Karl Strauss Brewing Co.'],
            ['San Diego', 'Karl Strauss Brewing Co. - Carlsbad'],
            ['San Diego', 'Karl Strauss Brewing Co. - La Jolla'],
            ['San Diego', 'Karl Strauss Brewing Co. - San Diego'],
            ['San Diego', 'Kilowatt Brewing'],
            ['San Diego', 'Monkey Paw Brewing Co.'],
            ['San Diego', 'Mother Earth Brew Co.'],
            ['San Diego', 'New English Brewing Co.'],
            ['San Diego', 'North Park Beer Co.'],
            ['San Diego', 'OB Brewery'],
            ['San Diego', 'Oceanside Ale Works'],
            ['San Diego', 'Pizza Port Bressi Ranch'],
            ['San Diego', 'Pizza Port Carlsbad'],
            ['San Diego', 'Pizza Port Ocean Beach'],
            ['San Diego', 'Pizza Port Solana Beach'],
            ['San Diego', 'Port Brewing Co.'],
            ['San Diego', 'Port Brewing Co. / The Lost Abbey'],
            ['San Diego', 'Pure Project'],
            ['San Diego', 'Rip Current Brewery'],
            ['San Diego', 'Rock Bottom Brewery - La Jolla'],
            ['San Diego', 'Saint Archer Brewing Co.'],
            ['San Diego', 'Second Chance Beer Co.'],
            ['San Diego', 'Societe Brewing Co.'],
            ['San Diego', 'South Park Brewing - CA'],
            ['San Diego', 'SouthNorte Beer Co.'],
            ['San Diego', 'Stone Brewing Co.'],
            ['San Diego', 'Stone Brewing World Bistro & Gardens - Liberty Station'],
            ['San Diego', 'The Beer Co.'],
            ['San Diego', 'The Lost Abbey'],
            ['San Diego', 'URBN St. Brewing Co.'],
            // Leaves:
            ['AleSmith Brewing Co.', 'American-Style Strong Pale Ale'],
            ['AleSmith Brewing Co.', 'Barley Wine-Style Ale'],
            ['AleSmith Brewing Co.', 'Belgian-Style Abbey Ale'],
            ['AleSmith Brewing Co.', 'Belgian-Style Strong Specialty Ale'],
            ['AleSmith Brewing Co.', 'Old Ale or Strong Ale'],
            ['AleSmith Brewing Co.', 'Scotch Ale'],
            ['Alpine Beer Co.', 'American-Style Strong Pale Ale'],
            ['BNS Brewing & Distilling Co.', 'American-Style Amber/Red Ale'],
            ['BNS Brewing & Distilling Co.', 'American-Style India Pale Ale'],
            ['BNS Brewing & Distilling Co.', 'Imperial Stout'],
            ['BNS Brewing & Distilling Co.', 'Old Ale or Strong Ale'],
            ['Bagby Beer Co.', 'Baltic-Style Porter'],
            ['Bagby Beer Co.', 'Bohemian-Style Pilsener'],
            ['Bagby Beer Co.', 'Classic Irish-Style Dry Stout'],
            ['Ballast Point Brewing & Spirits - Scripps Ranch', 'American-Style Pale Ale'],
            ['Ballast Point Brewing & Spirits - Scripps Ranch', 'Chili Beer'],
            ['Ballast Point Brewing & Spirits - Scripps Ranch', 'Irish-Style Red Ale'],
            ['Ballast Point Brewing Co.', 'American-Style India Pale Ale'],
            ['Ballast Point Brewing Co.', 'Imperial India Pale Ale'],
            ['Ballast Point Brewing Co.', 'Out of Category – Traditionally Brewed Beer'],
            ['Ballast Point Brewing Co. - Home Brew Mart', 'Fruited American-Style Sour Ale'],
            ['Benchmark Brewing Co.', 'Session Beer'],
            ['Breakwater Brewing Co.', 'Fruit Beer or Field Beer'],
            ['Breakwater Brewing Co.', 'Imperial India Pale Ale'],
            ['Breakwater Brewing Co.', 'Rye Beer'],
            ['Brit Antrim Benefit Beer Pizza Port Ocean Beach', 'American-Style Stout'],
            ['Burgeon Beer Co.', 'Session Beer'],
            ['Coronado Brewing Company Brewpub', 'American-Style Black Ale'],
            ['Culture Brewing Co.', 'American-Style Brown Ale'],
            ['Culture Brewing Co.', 'Golden or Blonde Ale'],
            ['Duck Foot Brewing Co.', 'Chili Beer'],
            ['Duck Foot Brewing Co.', 'Wood- and Barrel-Aged Beer'],
            ['Eppig Brewing', 'Session Beer'],
            ['Green Flash Brewing Co.', 'American Style Amber/Red Ale'],
            ['Green Flash Brewing Co.', 'American-Belgo-Style Ale'],
            ['Green Flash Brewing Co.', 'Belgian-Style Abbey Ale'],
            ['Green Flash Brewing Co.', 'Wood- and Barrel-Aged Strong Stout'],
            ['Groundswell Brewing Co.', 'American-Style Brown Ale'],
            ['Groundswell Brewing Co.', 'Classic Irish-Style Dry Stout'],
            ['Home Brewing Co.', 'Historical Beer'],
            ['Karl Strauss Brewing Co.', 'Belgian-Style Abbey Ale'],
            ['Karl Strauss Brewing Co.', 'Irish-Style Red Ale'],
            ['Karl Strauss Brewing Co.', 'South German-Style Hefeweizen'],
            ['Karl Strauss Brewing Co. - Carlsbad', 'Honey Beer'],
            ['Karl Strauss Brewing Co. - La Jolla', 'English-Style Summer Ale'],
            ['Karl Strauss Brewing Co. - La Jolla', 'International-Style Pale Ale'],
            ['Karl Strauss Brewing Co. - La Jolla', 'Session Beer'],
            ['Karl Strauss Brewing Co. - San Diego', 'American-Style Sour Ale'],
            ['Karl Strauss Brewing Co. - San Diego', 'Session India Pale Ale'],
            ['Karl Strauss Brewing Co. - San Diego', 'South German-Style Hefeweizen'],
            ['Kilowatt Brewing', 'Chocolate Beer'],
            ['Monkey Paw Brewing Co.', 'English-Style Summer Ale'],
            ['Monkey Paw Brewing Co.', 'American-Style Strong Pale Ale'],
            ['Mother Earth Brew Co.', 'Extra Special Bitter'],
            ['New English Brewing Co.', 'Coffee Beer'],
            ['North Park Beer Co.', 'Bohemian-Style Pilsener'],
            ['OB Brewery', 'German-Style Wheat Ale'],
            ['OB Brewery', 'American-Style Pale Ale'],
            ['Oceanside Ale Works', 'American-Style Black Ale'],
            ['Pizza Port Bressi Ranch', 'American-Style Amber/Red Ale'],
            ['Pizza Port Carlsbad', 'American-Style Brown Ale'],
            ['Pizza Port Carlsbad', 'Belgian-Style Strong Specialty Ale'],
            ['Pizza Port Carlsbad', 'Classic Irish-Style Dry Stout'],
            ['Pizza Port Carlsbad', 'Coffee Beer'],
            ['Pizza Port Carlsbad', 'English-Style Brown Ale'],
            ['Pizza Port Carlsbad', 'English-Style India Pale Ale'],
            ['Pizza Port Carlsbad', 'Export Stout'],
            ['Pizza Port Carlsbad', 'Imperial Red Ale'],
            ['Pizza Port Carlsbad', 'Imperial Stout'],
            ['Pizza Port Carlsbad', 'Scotch Ale'],
            ['Pizza Port Carlsbad', 'Session Beer'],
            ['Pizza Port Carlsbad', 'Sweet Stout'],
            ['Pizza Port Ocean Beach', 'Coffee Beer'],
            ['Pizza Port Ocean Beach', 'English-Style Mild Ale'],
            ['Pizza Port Ocean Beach', 'Foreign-Style Stout'],
            ['Pizza Port Ocean Beach', 'Imperial Red Ale'],
            ['Pizza Port Ocean Beach', 'Session Beer'],
            ['Pizza Port Solana Beach', 'American-Style Stout'],
            ['Pizza Port Solana Beach', 'Classic Irish-Style Dry Stout'],
            ['Pizza Port Solana Beach', 'Double Red Ale'],
            ['Pizza Port Solana Beach', 'English-Style Mild Ale'],
            ['Pizza Port Solana Beach', 'Imperial Red Ale'],
            ['Pizza Port Solana Beach', 'Oatmeal Stout'],
            ['Port Brewing Co.', 'Imperial India Pale Ale'],
            ['Port Brewing Co.', 'Imperial Red Ale'],
            ['Port Brewing Co.', 'Indigenous Beer'],
            ['Port Brewing Co.', 'Other Strong Beer'],
            ['Port Brewing Co.', 'Out of Category – Traditionally Brewed Beer'],
            ['Port Brewing Co. / The Lost Abbey', 'Wood- and Barrel-Aged Sour Beer'],
            ['Pure Project', 'Belgian-Style Lambic or Sour Ale'],
            ['Rip Current Brewery', 'Bock'],
            ['Rip Current Brewery', 'German-Style Doppelbock or Eisbock'],
            ['Rip Current Brewery', 'Scotch Ale'],
            ['Rock Bottom Brewery - La Jolla', 'English Style Brown Ale'],
            ['Saint Archer Brewing Co.', 'Belgian-Style Witbier'],
            ['Second Chance Beer Co.', 'American-Style Amber/Red Ale'],
            ['Second Chance Beer Co.', 'Robust Porter'],
            ['Societe Brewing Co.', 'American-Style Stout'],
            ['Societe Brewing Co.', 'International-Style Pale Ale'],
            ['Societe Brewing Co.', 'Session India Pale Ale'],
            ['South Park Brewing - CA', 'Oatmeal Stout'],
            ['SouthNorte Beer Co.', 'Specialty Beer'],
            ['Stone Brewing Co.', 'American-Style India Black Ale'],
            ['Stone Brewing Co.', 'Herb and Spice or Chocolate Beer'],
            ['Stone Brewing World Bistro & Gardens - Liberty Station', 'Other Belgian-Style Ale'],
            ['The Beer Co.', 'Wood- and Barrel-Aged Strong Beer'],
            ['The Lost Abbey', 'American-Style Sour Ale'],
            ['The Lost Abbey', 'Belgian and French-Style Ale'],
            ['The Lost Abbey', 'Belgian-Style Lambic or Sour Ale'],
            ['The Lost Abbey', 'Experimental Beer'],
            ['The Lost Abbey', 'Wood- and Barrel-Aged Sour Beer'],
            ['URBN St. Brewing Co.', 'French- and Belgian-Style Saison']
        ]
    }]
});