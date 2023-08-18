// จงหาและนับจำนวนตัวอักษรที่ปรากฏใน str

// ```js
let str = "I live in Thailand";
// // expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
// ```


// console.log(a);

result = a.reduce((acc, item) => {
  a = str.split("");
  if (item != " ") {
    count = 0;
    a.forEach((element) => {
      if (element.toLowerCase() == item.toLowerCase()) {
        count++;
      }
    });
    acc[item.toLowerCase()] = count;
  }
//   console.log(count, item);

  return acc;
}, {});

console.log(result);
