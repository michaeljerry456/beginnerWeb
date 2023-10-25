// log the function name
function   ChgCard(card) {
  let chgedCard = card+1;
//   console.log(arguments.callee)
//   console.log(typeof arguments.callee)
  console.log(ChgCard)
  console.log(typeof ChgCard)
  
  return chgedCard;
}

arr = [2,4,5,6]

// let mapped = arr.map((card) => ChgCard(card));
// console.log(mapped)

// const originalArray = [1, 2, 7, 4, 5];
// const itemToExclude = 7;

// const newArray = originalArray.filter(item => item !== itemToExclude);
// console.log(newArray)

const myArray = [1, 2, 3, 4, 5];
const itemsToCheck = [9, 6, 7];

const atLeastOneIncluded = itemsToCheck.some(item => myArray.includes(item));

console.log(atLeastOneIncluded); 
console.log(myArray.includes(5));
console.log("last word before 10-25 commit ")

