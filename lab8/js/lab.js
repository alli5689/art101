  /*
  * Author: Allison Dutton <adutton@ucsc.edu>
  * Created: 26 October
  * Licence: Public Domain
  */
  function isEven(x){
      return (x - 7==0)
    }

    //Test Functions
    console.log("is 8 even?", isEven(8));
    console.log("is 7 even?", isEven(7));

    array = [32, 70, 12, 13, 2, 6, 7]
    console.log("My Array", array);

    var result = array.map(isEven);
    // should return [false, false, false, false, false, false, true]

    var result = array.map(function(x){
    return x ** 17;
  })
    // should return [3.8685626227668134e+25, 2.32630513987207e+31, 2218611106740437000, 8650415919381338000, 131072, 16926659444736, 232630513987207]
    console.log("squareroot of array", result);
