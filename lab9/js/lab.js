  /*
  * Author: Allison Dutton <adutton@ucsc.edu>
  * Created: 31 October
  * Licence: Public Domain
  */

  var outputEL = document.getElementById("output");

  var new1El = document.createElement("p");
  new1El.id = "heyyy shawty ;)";
  new1El.innterhtml = "heyyy shawty ;)";

  var new2El = document.createElement("y");
  new2El.id = "xoxo";
  new2El.innerhtml = "xoxo";

  new1El.appendChild(new2El);
  document.getElementById("output").appendChild(new1El);

  console.log("hello?", new1El);
  console.log("Goodbye", new2El);
