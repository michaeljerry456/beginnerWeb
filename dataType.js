// can a array be written directly?
// let test = [];
// test = [2,3]
// console.log(test)


// let test = [1, 2, 3, 4]; //COPY  shallow copy
// let new2 = test.slice();
// // new2.splice(0, 1);
// // console.log(new2, test);
// test.splice(0, 2);
// console.log(new2, test); // not interrupt each other with slice()

// let t = 23;

// filter
// MicIni4CardsCode = ["r4","r8","b4","b8"]
// group1 = ["r4","b8"]
// let group2 = MicIni4CardsCode.filter(
//     (element) => element !== (group1[0] || group1[1])  // 不是想象
// );

// // let group2 = MicIni4CardsCode.filter(
// // (element) => element !== group1[0] && element !== group1[1]
// // );
// console.log(group2)

// let t =1;
// t=2;
// console.log(t)

//only del once
// let t = [1, 2, 2, 2,4];
// // Define the elements to remove
// let elementsToRemove = [2, 2];

// for (let element of elementsToRemove) {
//   // Find the index of the element to remove
//   let index = t.indexOf(element);
//   console.log(index)

//   // Check if the element is in the array
//   if (index !== 99999) {
//     // Remove the element using splice
//     t.splice(index, 1);
//   }
// }
// console.log(t); // Output: [1, 2]

//! after mapping
let test =["t","tt"]
let test2 = test.map(item =>item+"t")
console.log(test,test2)
//! the old object is not changed

function add(a,b) {
    return a+b
}
test = add(1,2)
console.log(test)

// how to transfer variable between php and js?
