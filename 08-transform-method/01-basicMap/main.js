// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// ```js
// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
const array = [1, 2, 30, 400];
const newArr = array.map((element)=> {return element*2})
console.log(newArr)