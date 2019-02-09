// Youtube API Key: AIzaSyDBI7hI8JK4aZzVzoielp37nxJ9C28bSCQ
// From https://console.developers.google.com/apis/credentials?project=home-karaoke-230600&authuser=1

// {/* <script src="https://apis.google.com/js/api.js"></script> */}

var artist;
var q;

$(document).ready(function () {

  console.log("ready!");

  $(".searchButton").on("click", function () {

    artist = $(".searchText").val();
    console.log(artist);

    function start() {

      // Initializes the client with the API key and the Translate API.
      $.ajax({
        datatype:"json",
        'apiKey': '2f736a46911731f07642e59e4f88026c',
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      }).then(function () {
        // Executes an API request, and returns a Promise.
        // The method name `language.translations.list` comes from the API discovery.
        return gapi.client.language.translations.list({
          q: artist,
          source: 'en',
          target: 'de',
        });
      }).then(function (response) {
        console.log(response.result.data.translations[0].translatedText);
      }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
      });
      gapi.load('client', start);
    };
    function handleAPILoaded() {
      $('.searchButton').attr('disabled', false);
    }
    
    
    // Search for a specified string.
    function search() {
      q = $('#query').val();
      var request = gapi.client.youtube.search.list({
        q: artist,
        part: 'snippet',
        maxResult: 3
      });
    
      request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-container').html('<pre>' + str + '</pre>');
      });
    }

    // $.ajax({
    //   datatype: "json",
    //   url: queryURL,
    //   success: console.log("WORKING")
    // }).then(function (response) {
    //   console.log(response);


    // });
    handleAPILoaded();
    start();
    search();

  });
});


// Loads the JavaScript client library and invokes `start` afterwards.
