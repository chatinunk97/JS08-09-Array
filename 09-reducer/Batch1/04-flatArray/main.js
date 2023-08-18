// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

// ```js
let flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// // expected result: [0, 1, 2, 3, 4, 5]
// ```

let result = flattened.reduce((acc, item) => {
  acc.push(item[0]);
  acc.push(item[1]);
  return acc;
}, []);
console.log(result);
