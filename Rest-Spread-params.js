function sum(a, b) {
    return a + b;
  }
  
console.log( sum(1, 2, 3, 4, 5) );


function showName(firstName, lastName, ...titles) {
    console.log( firstName + ' ' + lastName ); // Julius Caesar
  
    // the rest go into titles array
    // i.e. titles = ["Consul", "Imperator"]
    console.log( titles[0] ); // Consul
    console.log( titles[1] ); // Imperator
    console.log( titles.length ); // 2
  }
  
  showName("Julius", "Caesar", "Consul", "Imperator");



//   The “arguments” variable
// There is also a special array-like object named arguments that contains all arguments by their index.

// For instance:

function showName() {
  console.log( arguments.length );
  console.log( arguments[0] );
  console.log( arguments[1] );

  // it's iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

// spread operator
//spread args

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); // 8

// at is spread and rest operator in JS?
// The rest operator (…) allows us to call a function with any number of arguments and then access those excess arguments as an array. ... The spread operator (…) allows us to expand an iterable like array into its individual elements.