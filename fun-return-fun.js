function a() {
    alert('A');
  }
  //alerts 'A', returns undefined
  
  function b() {
    alert('B');
    return a;
  }
  //alerts 'B', returns function a
  
  function c() {
    alert('C');
    return a();
  }
  //alerts 'C', alerts 'A', returns undefined
  
  alert("Function 'a' returns " + a());
  alert("Function 'b' returns " + b());
  alert("Function 'c' returns " + c());

  //When you return b, it is just a reference to function b, but not being executed at this time.

// When you return b(), you're executing the function and returning its value.