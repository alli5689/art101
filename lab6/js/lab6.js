/*
 * Author: Allison Dutton <adutton@ucsc.edu>
 * Created: 19 October
 * Licence: Public Domain
 */

 // Define Variables
 myTransport = ["VW Jetta", "bus"];

 myMainRide = {
   make: "VW",
   model: "Jetta",
   color: "grey",
   year: 2015,
   age : function () {
      return 2022 - age;
   }
 }

 // output
 document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
 document.writeln("My Main Ride: <pre>",
      JSON.stringify(myMainRide, null, '\t'), "</pre>");
