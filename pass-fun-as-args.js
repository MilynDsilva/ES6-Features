function sayBoo() {
    console.log('Boo!')
    return function() {
      console.log('Argh!')
    }
  }
  
  setTimeout(sayBoo(), 3000)
  // => Boo! is logged instantly when line 8 is first evaluated and sayBoo() called.
  // => Argh! is logged 3 seconds later when setTimeout calls the returned function.
  //

//   Here setTimeout is looking for the first argument to provide a ‘thing to do when you are ready’. If we call sayBoo() rather than referencing it, what we are actually providing for setTimeout to do is whatever sayBoo() returns — in this case, nothing it can execute. If sayBoo() returned a function, then that function would be available to setTimeout.


function sayBoo() {
  console.log('Baaoo!');
}

setTimeout(sayBoo, 3000);

//----------------------------------------//

function sayBoo() {
    console.log('Boo!')
  }
  
  // do this - reference the function by its name:
  setTimeout(sayBoo, 3000)
  // => Boo! is logged after three seconds.
  
  // don't do this - invoke the function in place:
  setTimeout(sayBoo(), 3000)
  // => Boo! is logged instantly... nothing happens 3 seconds later.