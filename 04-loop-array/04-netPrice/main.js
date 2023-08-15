// - จงสร้างตัวแปร summary โดยใช้ค่าจากตัวแปร sales
// - netPrice = price x discount (ถ้าไม่มี discount ให้ถือว่า netPrice = price)

// ```js
// const sales = [
//   { price: 1000, discount: 0.1 },
//   { price: 500, discount: 0.05 },
//   { price: 100 }
// ];

// const summary = [
//   { netPrice: 900 },
//   { netPrice: 475 },
//   { netPrice: 100 }
// ];

// ```

const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

// function calSum(sales) {
//   const summary = [];
//   sales.forEach((a) => {
//     if (a["discount"]) {
//       const newObj = { netPrice: a["price"] * (1 - a["discount"]) };
//       summary.push(newObj);
//     } else {
//       const newObj = { netPrice: a["price"] };
//       summary.push(newObj);
//     }
//   });
//   return summary;
// }

// a = calSum(sales);
// console.log(a);

// Very short version just turn the if/else to tenary
newArr = [];
sales.forEach((obj) =>
  newArr.push({ newPrice: obj.price * 1 - (obj.discount || 0) })
);

console.log(newArr);
newArr.forEach((a) => {
  console.log(a);
});
