// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array


// ```js
let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

// console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33
// ```
function getAverageAge(arr){
    result = arr.reduce((acc,item)=> item['age']+acc,0)
    return (result / arr.length).toFixed(2)
}


console.log(getAverageAge(arr))

