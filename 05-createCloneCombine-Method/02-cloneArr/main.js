// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

const clone = (arr)=>{
    return arr.slice()
}
const a = [1, 5, 7, 11];
const newArray = clone(a);
console.log(`The old array is ${a} ${"\n"} and the new array is ${newArray}`)