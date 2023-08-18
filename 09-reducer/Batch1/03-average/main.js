// จงหาคะแนนเฉลี่ยแบบถ่วงน้ำหนัก

// ```js
const scores = [
  { score: 90, subject: "HTML", weight: 0.2 },
  { score: 95, subject: "CSS", weight: 0.3 },
  { score: 85, subject: "JavaScript", weight: 0.5 },
];
// // expected result: 89
// ```
function weightAverage(arr) {
  scoreSum = arr.reduce((acc, item) => {
    return acc + item["score"] * item["weight"];
  }, 0);
  weightSum = arr.reduce((acc, item) => {
    return acc + item["weight"];
  }, 0);
  return scoreSum / weightSum;
}

result = weightAverage(scores)
console.log(result)