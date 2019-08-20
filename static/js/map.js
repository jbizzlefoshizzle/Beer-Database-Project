var myMap = L.map("map", {
    center: [32.7157, -117.1611],
    zoom: 12

 })
 // Adding tile layer
 L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
 }).addTo(myMap);

 var nyLink = "../data/beer_business_cordinates.geojson"
 var myMapStyle = {
    color: "white",
    fillColor: "pink",
    fillOpacity: 0.5,
    weight: 1.5
 }
 
 //var marker = L.marker()
 
 //d3.json(nyLink, function(myData){
 // console.log(myData)
 // L.geoJson(myData, {
  //    style: myMapStyle

 // }).addTo(myMap)

  // Creating a geoJSON layer with the retrieved data
// Function that will determine the color of a neighborhood based on the Rating it belongs to

function chooseColor(Rating) {
    switch (Rating) {
    case "5":
      return "yellow";
    case "4.5":
      return "orange";
    case "4":
      return "red";
    case "3":
      return "pink";
    default:
      return "blue";
    }
  }
d3.json(nyLink, function(myData){
    console.log(myData)
    console.log(chooseColor(myData.features[1].properties.Rating));

    L.geoJson(myData, {
        // Style each feature (in this case a neighborhood)
        style: function(feature) {
            console.log(feature)
            var rating = feature.properties.Rating;

                return {
                    color: chooseColor(rating)
                };
    
        },
// Change Map Colors Based on Ratings.
    onEachFeature: function (feature, layer) {
     layer.bindPopup("<h1>" + "" + feature.properties.Name + "</h1><hr><h2>" + "Yelp Rating: " + feature.properties.Rating + "</h2> <hr> <h2>" + "# Yelp Reviews: " + feature.properties.Review_Count + "</h2>");
     },
     pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng, {
            radius: Math.round(10),
            fill: true,
            fillOpacity: 0.5
        }); 
        }
    }).addTo(myMap);
 });