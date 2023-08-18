// จงนับชื่อที่ปรากฏใน names

// ```js
let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// // expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

// ```
// Easy solution from class
initObj = {};

// Creates a function for screening and counting the values
function reduceFn(acc, name) {
  if (!acc[name]) {
    acc[name] = 0;
  }
  acc[name]++;
  return acc;
}
const r = names.reduce(reduceFn, initObj);
console.log(r);

// Pure Reduce
let result = names.reduce((a, name) => {
  count = names.reduce((acc, item) => {
    if (item === name) {
      acc += 1;
    }
    return acc;
  }, 0);
  a[name] = count;

  return a;
}, {});

console.log(result);

// Using for Each

// let result = names.reduce((a,name)=>{
//     count = 0
//     names.forEach((item)=>{
//         if(item === name){
//             count++
//         }
//     })
//     a[name] = (count);

//     return a}

//     ,{})

// console.log(result)
