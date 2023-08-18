// จงหา unique array element ของ alphabets

// ```js
let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
// // expected result: ['a', 'b', 'c', 'e', 'd']
// ```

result = alphabets.reduce((acc, item) => {
  // Check whether that character has already been added to the array acc
  if (acc.includes(item)) {
    return acc;
  }
  //item => single character
  // Interate the array to check the letter
  for (char of alphabets) {
    if (item === char) {
      break;
    }
  }
  acc.push(item);
  return acc;
}, []);

console.log(result);
