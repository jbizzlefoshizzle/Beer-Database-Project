// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

//construct the table
tableData.forEach((data) => {
    var row = tbody.append("tr");
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


 // Getting a reference to the button on the page with the id filter-btn
var button = d3.select("#filter-btn");
  

//button
button.on("click", function() {

     // Getting a reference to the date input value on the page with the id 
     var catInput = d3.select("#category").property("value");
     var medalInput = d3.select("#medal").property("value");
     var yearInput = parseInt(d3.select("#year").property("value"));
     var countyInput = d3.select("#county").property("value");
     var stateInput = d3.select("#state").property("value");
     var beerInput = d3.select("#beer").property("value");
     var cityInput = d3.select("#city").property("value");
    //  var entriesInput = d3.select("#entries").property("value");
     var breweryInput = d3.select("#brewery").property("value");

     // get the filter data
     var filterData = tableData

     // filter data by input conditions, if exist
    if (catInput){
        filterData = filterData.filter(myData => myData.Category === catInput);
    };
     
    if (medalInput){
        filterData = filterData.filter(myData => myData.Medal === medalInput);
    };

    if (yearInput){
        filterData = filterData.filter(myData => myData.Year === yearInput);
    };

    if (countyInput){
        filterData = filterData.filter(myData => myData.County === countyInput);
     };

    if (stateInput){
        filterData = filterData.filter(myData => myData.State === stateInput);
    };

    if (beerInput){
        filterData = filterData.filter(myData => myData["Beer Name"] === beerInput);
    };
    if (cityInput){
        filterData = filterData.filter(myData => myData.City === cityInput);
    };
    // if (entriesInput){
    //     filterData = filterData.filter(myData => myData.Total_Category_Entries === entriesInput);
    // };
    if (breweryInput){
        filterData = filterData.filter(myData => myData.Brewery === breweryInput);
    };

     tbody.html(" ")

     //construct the table
     filterData.forEach((data) => {
         var row = tbody.append("tr");
          Object.entries(data).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
         });
      });
  

  });
    