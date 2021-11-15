//A falsy value is a value that is considered false when encountered in a Boolean context.
//List of JS Falsy values.
//false , 0 , -0 , 0n (bigint zero) , " " , '', ` `, null , undefined , NaN

function TruthyOrFalsy(Val) {
    return Val ? "truthy" : "falsy"; //conditional ternary operator
}
let Input = 1;
console.log(TruthyOrFalsy(Input));



