// จงหา element ตัวแรก ใน nums ที่มีค่าน้อยกว่า 0

// ```js
const nums = [7, 9, -5, -1, 0, 3];
// // expexted result: -5
// ```

result = nums.find((item)=>{return item < 0})
console.log(result)