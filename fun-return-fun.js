function a() {
    console.log('A');
  }
  //console.logs 'A', returns undefined
  
  function b() {
    console.log('B');
    return a;
  }
  //console.logs 'B', returns function a
  
  function c() {
    console.log('C');
    return a();
  }
  //alerts 'C', alerts 'A', returns undefined
  
  console.log("Function 'a' returns " + a());
  console.log("Function 'b' returns " + b());
  console.log("Function 'c' returns " + c());

  //When you return b, it is just a reference to function b, but not being executed at this time.

// When you return b(), you're executing the function and returning its value.