  /*
  * Author: Allison Dutton <adutton@ucsc.edu>
  * Created: 2 November
  * Licence: Public Domain
  */

$('#challenges').append('<button id="buttonChalEl">click me.</button>');

$('#problems').append('<button id="buttonProbEl">Button</button>');

$('#results').append('<button id="buttonResEl">CLICK!</button>');

$('#buttonChalEl').click(function(){
  $('#challenges').toggleClass("special");
});

 $('#buttonProbEl').click(function(){
   $('#problems').toggleClass("special2");
 });

 $('#buttonResEl').click(function(){
   $('#results').toggleClass("special3");
 })
