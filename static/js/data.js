d3.csv("../beer_winners.csv", function(error, data) {
    if (error) throw error;

    console.log(data)
    var beer_name = data.map(row => row["Beer Name"]);
    var brewery = data.map(row => row.Brewery);
    var medal = data.map(row => row.Medal);
    var category = data.map(row => row.Category);
    var city = data.map(row => row.City);
    var county = data.map(row => row.County);
    var state = data.map(row => row.State);
    var year = data.map(row => row.Year);
    var totalCategoryEntries = data.map(row => row["Total Category Entries"]);
    // console.log(medal)
function buildTable() {
    // var medal = data.map(row => row.Medal);
    var table = d3.select("#beer-table");
    var tbody = table.select("tbody");
    var trow
    for (var i = 0; i < data.length; i ++) {
        trow = tbody.append("tr");
        trow.append("td").text(beer_name[i]);
        trow.append("td").text(brewery[i]);
        trow.append("td").text(medal[i]);
        trow.append("td").text(category[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(county[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(year[i]);
        trow.append("td").text(totalCategoryEntries[i]);
    };

    
};
buildTable()
});
// console.log(medal)