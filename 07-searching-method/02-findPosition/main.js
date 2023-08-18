// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

// ```js
const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
// // expexted result: [0, 2, 4]
// ```
result = [];
alphabets.findIndex((item,index)=>{
    if(item === 'a'){
        result.push(index)
    };
})
// This runs through all array's elements because 
// we did not return anything so it loops all the way and return undefinded
// But well, it's not use as it supposed to be used it designed just to find one index
console.log(result)




// array = [1,2,3,4]
// array.findIndex(  (element)=>{element == 4}   )