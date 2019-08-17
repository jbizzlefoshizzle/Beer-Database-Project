// function buildMetadata(sample) {
//   d3.json(`/metadata/${sample}`).then((data) => {
//     // Use d3 to select the panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");

//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(data).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key}: ${value}`);
//     });

//     // BONUS: Build the Gauge Chart
//     buildGauge(data.WFREQ);
//   });
// }

function buildCharts(sample) {
  d3.json(`/samples/${sample}`).then((data) => {
    const beer_id = data.beer_id;
    const category = data.category;
    const sample_values = data.sample_values;

    var pieData = [
      {
        values: sample_values.slice(0, 10),
        labels: beer_id.slice(0, 10),
        hovertext: category.slice(0, 10),
        hoverinfo: "hovertext",
        type: "pie"
      }
    ];

    var pieLayout = {
      margin: { t: 0, l: 0 }
    };

    // Plotly.plot("pie", pieData, pieLayout);
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
      // .innerRadius(0)
      .innerRadius(radius - 70);
  // Generate text
    var labelArc = d3.arc()
      .outerRadius(radius - 50)
      .innerRadius(radius - 50);
    var pie = d3.pie()
      .sort(null)
      .value(pieData.values);
    var svg = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width/2 + "," + height/2 + ")");
    // Append arc elements
    var g = svg.selectAll(".arc")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "arc")
    // Append path
    g.append("path")
        .attr("d", arc)
        // .style("fill", "blue")
        .style("fill", function(d) {
            return color(pieData.values);
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
            return pieData.hovertext;
        })
});

function pieTween(oogla_boogla) {
    oogla_boogla.innerRadius = 0;
    var pie = d3.interpolate({startAngle: 0, endAngle: 0}, oogla_boogla);
    return function(filling) {
        return arc(pie(filling));
    };
  };
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    // buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  // buildMetadata(newSample);
}

// Initialize the dashboard
init();