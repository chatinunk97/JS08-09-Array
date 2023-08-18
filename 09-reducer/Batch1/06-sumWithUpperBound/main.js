// จงหาผลรวมของเลขที่มีค่าน้อยกว่า 40 ที่อยู่ในตัวแปร str 

// ```js
let str = '31 45 12 67 34 86 23 37 19 41';

// ```
numStr = str.split(" ")

sum = numStr.reduce((acc,item)=>{
    return +item < 40 ? acc + +item : acc
},0)

console.log(sum)