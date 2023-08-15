// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

// ```js
// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]
// ```

function squareArr(arr) {
  square_arr = [];
  arr.forEach((a, b) => {
    square_arr.push(a * a);
  });
  return square_arr;
}


const arr = [2, 3, 5, 7, 11];
a = squareArr(arr);
console.log(
  `The old array is ${arr} ${"\n"}and the square array is ${square_arr}`
);
