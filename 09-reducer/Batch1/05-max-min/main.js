// จงหาค่ามากสุดและน้อยสุดใน arr

// ```js
let arr = [3.24, 2.78, 3.86, 1.37, 0.52];
// ```

maxValue = arr.reduce((acc,item)=>{
    if(item > acc.max){
        acc.max = item;
    }
    if(item < acc.min){
        acc.min = item;
    }
    return acc;
},{max : -Infinity , min : Infinity})

console.log(maxValue)