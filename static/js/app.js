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

     var cInput = d3.select("#category").property("value");
     var catInput = cInput.toLowerCase();
     console.log(catInput);

     var mInput = d3.select("#medal").property("value");
     var medalInput = mInput.toLowerCase();
     console.log(medalInput);

     var yearInput = parseInt(d3.select("#year").property("value"));

     var cntyInput = d3.select("#county").property("value");
     var countyInput = cntyInput.toLowerCase();
     console.log(countyInput);

     var sInput = d3.select("#state").property("value");
     var stateInput = sInput.toUpperCase();
     console.log(stateInput);

     var bInput = d3.select("#beer").property("value");
     var beerInput = bInput.toLowerCase();
     console.log(beerInput);

     var ctyInput = d3.select("#city").property("value");
     var cityInput = ctyInput.toLowerCase();
     console.log(cityInput);

    //  var entriesInput = d3.select("#entries").property("value");
     var brwyInput = d3.select("#brewery").property("value");
     var breweryInput = brwyInput.toLowerCase();
     console.log(breweryInput);

     // get the filter data
     var filterData = tableData

     // filter data by input conditions, if exist
    if (catInput){
        filterData = filterData.filter(myData => myData.Category.toLowerCase() === catInput);
    };
     
    if (medalInput){
        filterData = filterData.filter(myData => myData.Medal.toLowerCase() === medalInput);
    };

    if (yearInput){
        filterData = filterData.filter(myData => myData.Year === yearInput);
    };

    if (countyInput){
        filterData = filterData.filter(myData => myData.County.toLowerCase() === countyInput);
     };

    if (stateInput){
        filterData = filterData.filter(myData => myData.State === stateInput);
    };

    if (beerInput){
        filterData = filterData.filter(myData => myData["Beer Name"].toLowerCase() === beerInput);
    };
    if (cityInput){
        filterData = filterData.filter(myData => myData.City.toLowerCase() === cityInput);
    };
    // if (entriesInput){
    //     filterData = filterData.filter(myData => myData.Total_Category_Entries === entriesInput);
    // };
    if (breweryInput){
        filterData = filterData.filter(myData => myData.Brewery.toLowerCase() === breweryInput);
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
    