//The arguments object is an array-like object. It has a length property that corresponds to the number of arguments passed into the function. You can access these values by indexing into the array, e.g. arguments[0] is the first argument.

const myfun = function (one) {
    
    if (arguments[0] === one && arguments[1] === 2 && arguments.length === 3)
        console.log('true');
    else{
        console.log('False');
    }
}

myfun(1,0,3);
//console.log(arguments[1]);


//------------------------------------------------------------//



x = sumAll(1, 123, 500, 115, 44, 88);
console.log(x);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    //console.log(arguments[i]);
    sum += arguments[i];
  }
  return sum;
}

//If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.

//------------------------------------------------------------//

function getInfo (name, year, color) {
    console.log(arguments);
    /*
    [object Arguments] {
      0: "Frankie",
      1: 1987,
      2: "Red"
    }
    */
    
    name = 'Jimmie';
    year = 1995;
    color = 'Orange';
  
    console.log(arguments);
    /*
    [object Arguments] {
      0: "Jimmie",
      1: 1995,
      2: "Orange"
    }
    */
  }
  
  getInfo('Frankie', 1987, 'Red');