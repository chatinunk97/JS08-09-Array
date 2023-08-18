// // ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

// ```js
// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
const array = [1, 2, 30, 400];
const newArr = array.map((element) => {
  return element * 2;
});
console.log(newArr);

// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
const array2 = [1, 2, 3, 4];
const newArr2 = array2.map((element) => String(element));
// console.log(newArr2)

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
const array3 = [1, "1", 2, {}];
const newArr3 = array3.map((element) => typeof element);
// console.log(newArr3)

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
const array4 = ["apple", "banana", "orange"];
const newArr4 = array4.map((element) => element.toUpperCase());
// console.log(newArr4)

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const array5 = [1, 3, 4, 5, 6, 7, 8];
const newArr5 = array5.map((element) => (element % 2 == 0 ? "even" : "odd"));
// console.log(newArr5)

// const array = [1, -3, 2, 8, -4, 5];
// // result: [1, 3, 2, 8, 4, 5]

const array6 = [1, -3, 2, 8, -4, 5];
const newArr6 = array6.map((element) => Math.abs(element));
console.log(newArr6);

// const array = [100, 200.25, 300.84, 400.3];
// // result: ["100.00", "200.25", "300.84", "400.30"]
const array7 = [100, 200.25, 300.84, 400.3];
const newArr7 = array7.map((element) => element.toFixed(2));
// console.log(newArr7);

// const array = [0, 5, 10, 7, 6, 5, 0];
// // result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const array8 = [0, 5, 10, 7, 6, 5, 0];
const newArr8 = array8.map((element) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return month[element].slice(0, 3);
});
console.log(newArr8);

// const array = [1, 16, 81, 256, 625, 1296];
// // result: [1, 2, 3, 4, 5, 6]
const array9 = [1, 16, 81, 256, 625, 1296];
const newArr9 = array9.map((element, index) => element / (index + 1) ** 3);
// console.log(newArr9);

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]
const array10 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArr10 = array10.map((element) => element["name"]);
console.log(newArr10);

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]
const array11 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
const newArr11 = array11.map((element) => element["age"]);
console.log(newArr11);

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const array12 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
const newArr12 = array12.map(
  (element) => element["name"] + " " + element["surname"]
);
console.log(newArr12);

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]
const array13 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
const newArr13 = array13.map((element) => {
  subArr = [];
  subArr.push(element["name"]);
  subArr.push(element["birth"]);
  subArr.push(`age: ${2021 - element["birth"].slice(0, 4)}`);
  return subArr;
});
console.log(newArr13);

// onst array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-10' },
//   { name: 'watermelon', birth: '1985-12-30' }
// ];
// // result: [
// //     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
// //     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
// //     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// // ]
const array14 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
const newArr14 = array14.map((element) => {
  const m = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  day = new Date(element["birth"]);
  const str_date =
    element["birth"].slice(8,) +
    " " +
    m[element["birth"].slice(-5,-3)-1].slice(0,3).toLowerCase() +
    " " +
    day.getFullYear();
  return `<tr><td>${element["name"]}</td>
  <td>${str_date}</td></tr>`;
});

console.log(newArr14);

// ```
