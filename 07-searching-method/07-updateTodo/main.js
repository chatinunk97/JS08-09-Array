// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element
//ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

// ```js
const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

// ```
function updateTask(id, newName) {
  foundIndex = tasks.findIndex((obj) => {
    return obj.id == id;
  });
  if(foundIndex != 1){
    tasks[foundIndex].name = newName
  }

}

updateTask(2, 'Travelling')
console.log(tasks)