  /*
  * Author: Allison Dutton <adutton@ucsc.edu>
  * Created: 14 November
  * Licence: Public Domain
  */

  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request (from the api docs)
      url: "https://api.kanye.rest/",
      // The data to send (will be converted to a query string)
      data: {
              // here is where any data required by the api
              //   goes (check the api docs)

            },
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      dataType : "json",
      // What do we do when the api call is successful
      //   all the action goes in here
      success: function(data) {
          // do stuff
          console.log("Success:", data);
      },
      // What we do if the api call fails
      error: function (request, error) {
          // do stuff
          console.log("Error:", request, error);
      }
  });
