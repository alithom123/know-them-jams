/*
BRIELL
Client ID fd416378d8de4147832b5d2cca107cf5
Client Secret 51925d8f227b464e8744e3699867d464
*/

/*
ALI
Client ID 31c7dc11ec5e470bb621001ba4ef790e
Client Secret 5eeda8974019472f8d1afa130a51efe8 
*/

// Search: https://developer.spotify.com/documentation/web-api/reference/search/search/
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#authorization-flows
// https://developer.spotify.com/documentation/web-api/
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// Our main javascript code.

// const wikiApiUrl = "https://en.wikipedia.org/w/api.php";
// var parameters = [];

// parameters.push("action=query");
// parameters.push("titles=Einstein");
// parameters.push("prop=info");
// parameters.push("format=jsonfm");

// action=query&titles=Albert%20Einstein&prop=info&format=jsonfm
// let wikiApiUrlWithParameters = wikiApiUrl + "?" + parameters.join("&");

$(document).ready(function() {
  console.log("ready!");

  // GET https://accounts.spotify.com/authorize

  $.ajax({
    url:
      "https://accounts.spotify.com/authorize?client_id=31c7dc11ec5e470bb621001ba4ef790e&response_type=token&redirect_uri=" +
      encodeURIComponent("http://localhost:8888/callback/"),
    type: "GET",
    success: function(result) {
      //called when successful
      alert(result);
    }
  });

  //   $.ajax({
  //     url: "https://accounts.spotify.com/api/token?",
  //     type: "POST",
  //     contentType: "application/x-www-form-urlencoded; charset=UTF-8",
  //     body: {
  //       grant_type: "client_credentials"
  //     },
  //     headers: {
  //       // 'Authorization': 'Bearer ' + accessToken
  //       Authorization:
  //         "Basic " +
  //         btoa(
  //           "fd416378d8de4147832b5d2cca107cf5:51925d8f227b464e8744e3699867d464"
  //         )
  //       // Basic <base64 encoded client_id:client_secret>
  //     }
  //   });

  /*
  var body = {
    grant_type: "password",
    username: username,
    password: password
  };
  */

  /*
$.ajax({
    url: 'https://localhost:44123/Token',
    type: 'POST',
    dataType: 'json',
    contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    
    data: body,
    complete: function(result) {
        //called when complete
        alert(result);
    },

    success: function(result) {
        //called when successful
        alert(result);
    },
    */

  // POST https://accounts.spotify.com/api/token

  // $.ajax({
  //     url: 'https://api.spotify.com/v1/me',
  //     headers: {
  //         'Authorization': 'Bearer ' + accessToken
  //     },
  //     success: function(response) {
  //         ...
  //     }

  //   var albumName = encodeURIComponent("Songs of Leonard Cohen");

  // This one was from the wiki playground
  // Playground: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&prop=extracts&generator=search&gsrsearch=You%20Want%20It%20Darker&gsrlimit=1

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&gsrsearch=You%20Want%20It%20Darker&gsrlimit=1&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=" +
  //       albumName +
  //       "&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=parse&page=einstein&format=json&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvlimit=1&rvprop=content&format=xml&titles=Leonard%20Cohen&origin=*",
  //     function(data) {
  //       console.log(data);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch=Einstein&prop=info&exintro=1&exlimit=20&exchars=200&origin=*&format=json",
  //     function(data) {
  //       console.log(data);
  //       console.log(data.query.pages["736"].extract);
  //     }
  //   );

  //   $.getJSON(
  //     "https://en.wikipedia.org/w/api.php?action=query&generator=search&utf8=1&gsrsearch=Einstein&prop=extracts&exintro=1&exlimit=20&exchars=200&origin=*&format=json",
  //     function(data) {
  //       console.log(data);
  //       console.log(data.query.pages["736"].extract);
  //     }
  //   );

  //   query:
  //   pages:
  //   736:

  /*
  $.getJSON(
    "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search&origin=*&gsrsearch=Einstein",
    function(data) {
        console.log(data);
        

    }
  );
  */

  /*
  $.ajax({
    type: "GET",
    url: wikiApiUrlWithParameters
    // data: data,
    // success: success,
    // dataType: dataType
  });
  */

  //   $.getJSON(wikiApiUrlWithParameters, function(result) {
  //     console.log("Synonyms returned:");
  //     console.log(result);
  //     // populateSynonyms(result);
  //     return result;
  //   });
});
