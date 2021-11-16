// Let's create an object o from function F with its own properties a and b:
let F = function () {
    this.a = 1;
    this.b = 2;
 }
 let o = new F(); // {a: 1, b: 2}
 
 // add properties in F function's prototype
 F.prototype.b = 3;
 F.prototype.c = 4;

 // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
 
 console.log(o.a); // 1
 // Is there an 'a' own property on o? Yes, and its value is 1.
 
 console.log(o.b); // 2
 // Is there a 'b' own property on o? Yes, and its value is 2.
 // The prototype also has a 'b' property, but it's not visited.
 // This is called Property Shadowing
 
 console.log(o.c); // 4
 // Is there a 'c' own property on o? No, check its prototype.
 // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
 
 console.log(o.d); // undefined
