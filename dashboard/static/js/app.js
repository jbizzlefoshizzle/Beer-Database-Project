function buildCharts(sample) {
  d3.json(`/samples/${sample}`).then((data) => {
    const beer_ids = data.beer_ids;
    const beer_categories = data.beer_categories;
    const sample_values = data.sample_values;

    // Build a Bubble Chart
    var bubbleLayout = {
      margin: { t: 0 },
      hovermode: "closest",
      xaxis: { title: "Beer Bubbles" }
    };
    var bubbleData = [
      {
        x: beer_ids,
        y: sample_values,
        text: beer_categories,
        mode: "markers",
        marker: {
          size: sample_values * 10,
          color: beer_ids,
          colorscale: "Earth"
        }
      }
    ];

    Plotly.plot("bubble", bubbleData, bubbleLayout);

    // Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 13 sample_values,
    // beer_ids, and labels (13 each).
    var pieData = [
      {
        values: sample_values.slice(0, 13),
        labels: beer_ids.slice(0, 13),
        hovertext: beer_categories.slice(0, 13),
        hoverinfo: "hovertext",
        type: "pie"
      }
    ];

    var pieLayout = {
      margin: { t: 0, l: 0 }
    };

    Plotly.plot("pie", pieData, pieLayout);
  });
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

var granimInstance = new Granim({
  element: '#canvas-complex',
  direction: 'left-right',
  isPausedWhenNotInView: true,
  states : {
      "default-state": {
          gradients: [
              [
                  { color: '#833ab4', pos: .2 },
                  { color: '#fd1d1d', pos: .8 },
                  { color: '#38ef7d', pos: 1 }
              ], [
                  { color: '#40e0d0', pos: 0 },
                  { color: '#ff8c00', pos: .2 },
                  { color: '#ff0080', pos: .75 }
              ],
          ]
      }
  }
});
