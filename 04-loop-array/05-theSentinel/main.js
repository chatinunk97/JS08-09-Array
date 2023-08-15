// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

function makeArray() {
  arr = [];
  do {
    number = prompt("Give me number pls")|| "";
    if (number.trim() == "" || isNaN(number)) {
      return arr;
    }
    arr.push(+number);
  } while (true);
}


function calArray(makeArray) {
  sum = 0;
//  Have the user create a new Array
  arr = makeArray();

//   Calaulate the newly created array's sum
  arr.forEach((a) => (sum += a));

  return arr, sum;
}

a = calArray(makeArray);
console.log(a);
console.log(arr);
console.log(`The array's numbers are ${arr} and the sume is ${sum}`);
