//'this' reffers to the object it belongs
//this is a special identifier keyword—automatically defined in the scope of every function—pointing to the “owner” of the function being executed
//this keyword refers to the object it belongs to

const person = {
    fname: 'John',
    lname: 'Doe',
    fullname: function() {//this is the current object
        return this.fname+ ' ' +this.lname; //since fname is not defined we can use this keyword
    }
};
//person.fullname();
console.log(person.fullname());


//------------------------------------------------------------//


let user = {
    name1:' Carl',
    age:30
};
let administrator = {
    name1:'Admin'
}

function newFun() {
    console.log('Hello there'+this.name1);
}
user.f=newFun;
administrator.f=newFun;
user.f();
administrator.f();


//------------------------------------------------------------//