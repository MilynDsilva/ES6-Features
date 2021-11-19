let cleanRoom = function(){
    return new Promise(function(resolve,reject){
    resolve('Room is cleaned');
    //reject('Room is not clean');
    });
};

let removeGarbage = function(message){
    return new Promise(function(resolve,reject){
    resolve(message+' Garbage has been removed ');
    });
};

let winIcecream = function(message){
    return new Promise(function(resolve,reject){
    resolve(message+' Won icecream');
    });
};
cleanRoom().then(function(message){
    return removeGarbage(message);
}).then(function(message){
    return winIcecream(message);
}).then(function(message){
    console.log('Finished ,Now the '+message);
}).catch(function(message){
    console.log('Hey , the  '+message);
});