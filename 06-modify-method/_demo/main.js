log = console.log;
log("Testing")

a = [
    "a",
    "b",
    function (){
        alert(this)
    }
]

objectItem = [
    {itemName : "Fruit" , itemCode : "00081" , itemPrice : 500},
    {itemName : "Vegetable" , itemCode : "00091" , itemPrice : 800},
    {itemName : "Rice" , itemCode : "00091" , itemPrice : 1000},
    
]
newarr = [];
objectItem.forEach((item) =>{
    newarr.push(item)
})
// log(newarr)

newarr2 = objectItem.map((item) => {return item})
// log(newarr2)

a = objectItem.find((item) => item["itemName"] ==="Fruit")
log(a)

b = objectItem.findIndex((item) => item["itemName"] ==="Fruit")
log(b)

c = objectItem.findIndex((item) => item["itemName"] ==="Something")
log(c)

let newObjItem = objectItem[b]
newObjItem["itemPrice"] += 10000.50
log(newObjItem)
objectItem.splice(b,1,newObjItem)
log(objectItem)