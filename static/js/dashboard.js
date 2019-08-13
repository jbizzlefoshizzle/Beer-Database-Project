var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20};
var width = 500 - margin.right - margin.left;
var height = 500 - margin.top - margin.bottom;
var radius = width/2;

var color = d3.scaleOrdinal()
    .range(["#BBDEFB", "#90CAF9", "#64B5F6", "#42A5F5", "#2196F3", "#1E88E5", "#1976d2"]);
// Generate arc
var arc = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0)
    // .innerRadius(radius - 70);
// Generate text
var labelArc = d3.arc()
    .outerRadius(radius - 50)
    .innerRadius(radius - 50);
// Make a pie
var pie = d3.pie()
    .sort(null)
    .value(function(d) {
        return d.count; // OPTIONAL
    }); // Pie's done!
// "Macho Man" Randy SVG
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
// Import data
d3.csv("../static/js/fakedata.csv", function(data) {
    // if (error) throw error;
    console.log(data)
    // Parse data
    data.forEach(function(d) {
        d.count = +d.count;
        d.fruit = d.fruit;
    });
    // Append arc elements
    var g = svg.selectAll(".arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "arc")
    // Append path
    g.append("path")
        .attr("d", arc)
        // .style("fill", "blue")
        .style("fill", function(d) {
            return color(d.data.fruit);
        })
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attrTween("d", pieTween)
    // Append text labels
    g.append("text")
        .transition()
        .ease(d3.easeLinear)
        .duration(2000)
        .attr("transform", function(d) {
            return "translate(" + labelArc.centroid(d) + ")"
        })
        .attr("dy", ".35em")
        .text(function(d) {
            return d.data.fruit;
        })
});

function pieTween(oogla_boogla) {
    oogla_boogla.innerRadius = 0;
    var pie = d3.interpolate({startAngle: 0, endAngle: 0}, oogla_boogla);
    return function(filling) {
        return arc(pie(filling));
    };
};

d3.csv("../data/beer_winners_v2.csv", function(error, data) {
    if (error) throw error;
    console.log(data)
});