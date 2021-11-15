//The only operator that takes 3 operands (Can shorten a simple if - else block)
// syntax:-    condn ? expr1 : expr2;

var age = 16;

var vote;

if(age>=18)
    vote = '1- Hey you can vote';
else
    vote='1- Sorry you cant vote';

console.log(vote);

//Can be re-written using ternary operator

var newage = 99;
var votenow = newage >= 20 ? '2- Hey you can vote' : '2- Sorry you cant vote';
console.log(votenow);