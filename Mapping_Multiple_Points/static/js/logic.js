// BOILERPLATE

// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// Approximate geographical center of the United States

// // An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:
// // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });

// To change the map's style, change the map id using the list of Mapbox ids below:
// https://docs.mapbox.com/api/maps/styles/

// mapbox/streets-v11
// mapbox/outdoors-v11
// mapbox/light-v10
// mapbox/dark-v10
// mapbox/satellite-v9
// mapbox/satellite-streets-v11

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// // An array containing each city's location, state, and population.
// let cities = [{
//   location: [40.7128, -74.0059],
//   city: "New York City",
//   state: "NY",
//   population: 8398748
// },
// {
//   location: [41.8781, -87.6298],
//   city: "Chicago",
//   state: "IL",
//   population: 2705994
// },
// {
//   location: [29.7604, -95.3698],
//   city: "Houston",
//   state: "TX",
//   population: 2325502
// },
// {
//   location: [34.0522, -118.2437],
//   city: "Los Angeles",
//   state: "CA",
//   population: 3990456
// },
// {
//   location: [33.4484, -112.0740],
//   city: "Phoenix",
//   state: "AZ",
//   population: 1660272
// }
// ];

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
  console.log(city)
  L.marker(city.location).addTo(map);
});



// // Add a circle to the map
// L.circleMarker([34.0522, -118.2437], {
//   radius: 300,
//   color: "black",
//   fillColor: '#ffffa1'
// }).addTo(map);





