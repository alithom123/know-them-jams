// Youtube API Key: AIzaSyDBI7hI8JK4aZzVzoielp37nxJ9C28bSCQ
// From https://console.developers.google.com/apis/credentials?project=home-karaoke-230600&authuser=1

// {/* <script src="https://apis.google.com/js/api.js"></script> */}

function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client
    .init({
      apiKey: "AIzaSyDBI7hI8JK4aZzVzoielp37nxJ9C28bSCQ",
      // Your API key will be automatically added to the Discovery Document URLs.
      discoveryDocs: ["https://people.googleapis.com/$discovery/rest"]
      // clientId and scope are optional if auth is not required.
      // clientId: "YOUR_WEB_CLIENT_ID.apps.googleusercontent.com",
      // scope: "profile"
    })
    .then(function() {
      // 3. Initialize and make the API request.
      return gapi.client.people.people.get({
        resourceName: "people/me",
        "requestMask.includeField": "person.names"
      });
    })
    .then(
      function(response) {
        console.log(response.result);
      },
      function(reason) {
        console.log("Error: " + reason.result.error.message);
      }
    );
}
// 1. Load the JavaScript client library.
gapi.load("client", start);
