//map() method: It applies a given function on all the elements of the array and returns the updated array.


const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
 
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})
 
console.log(announcements);

//reduce() method: It reduces all the elements of the array to a single value by repeatedly applying a function.

const arrayOfNumbers = [1, 2, 3, 4];
 
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
  return accumulator + currentValue;
});
 
console.log(sum); 

//filter() method: It filters the elements of the array that return false for the applied condition and returns the array which contains elements that satisfy the applied condition.

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {  
  return n > 5;
});

//for each The .forEach() method executes a callback function on each of the elements in an array in order.


const numbers = [28, 77, 45, 99, 27];
 
numbers.forEach(number => {  
  console.log(number);
}); 