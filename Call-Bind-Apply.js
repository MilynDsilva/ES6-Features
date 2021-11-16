var person1= {
    firstname:'Name1',
    lastname:'Name1.1'
};
var person2= {
    firstname:'Name2',
    lastname:'Name2.1'
};

function myfun(greet){
    console.log(greet+' '+this.firstname+ ' '+this.lastname);
}

function forbind(){
    console.log('im bind '+this.firstname+ ' '+this.lastname);
}

myfun.call(person1,'Hey im call ');
myfun.call(person2,'Hey im call')
//call //invokes immediately

//apply // invokes immedtaely but takes an array only
myfun.apply(person1,['im_apply']);
myfun.apply(person2,['im_apply']);

//bind works similar but has to be invoked seperately
var bind_invoke_later=forbind.bind(person1);
var bind_invoke_later1 =forbind.bind(person2);
bind_invoke_later();
bind_invoke_later1();
//console.log(bind_invoke_later1());

// Call invokes the function and allows you to pass in arguments one by one.
// Apply invokes the function and allows you to pass in arguments as an array.
// Bind returns a new function, allowing you to pass in a this array and any number of arguments.

