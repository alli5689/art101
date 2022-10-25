/*
 * Author: Allison Dutton <adutton@ucsc.edu>
 * Created: 24 October
 * Licence: Public Domain
 */

 // sortUserName - a function that takes user input and sorts the letters
 // of their My_Name
 function sortUserName() {
   var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
   console.log("username =", userName);
   var nameArray = userName.split('');
   console.log("nameArray =", nameArray);
   var nameArraySort = nameArray.sort();
   console.log("nameArraySort =", nameArraySort);
   var nameSorted = nameArraySort.join('');
   console.log("nameSorted =", nameSorted);
   return nameSorted;

   // Output
   document.writeln("Oh hey, I've fixed your name: ",
      sortUserName(),"</br>";
