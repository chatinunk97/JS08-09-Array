// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b

arr = [1,2,3,4,5,6,7,8,9,10]
function filterRange(arr,a,b){
    newarr = arr.filter((element)=> element > a && element < b)
    return newarr
}

