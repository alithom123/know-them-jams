

$(document).ready(function() {
    console.log("ready!");

// var key = "8d500052733636b90bdda68c9ce64e78";
// var title = "fantasy";
var queryURL = "https://api.musixmatch.com/ws/1.1/matcher.track.get?format=jsonp&callback=callback&q_track=freebird&apikey=8d500052733636b90bdda68c9ce64e78";



$.ajax({
    datatype: "json",
    url: queryURL,
    success: console.log("WORKING")
}).then(function(response){
    console.log(response);
});

// $.getJSON({
//     url: queryURL,
//     method:"GET"
// }).then(function(response){
//     console.log(response);  
// })

// $.getJSON(queryURL, function(response) {
//     console.log(response);
// });


});