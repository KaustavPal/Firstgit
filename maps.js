var myMap = new Map();
myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
myMap.set(4, "Four");
let count=1;

/* console.log(myMap);

for(let key of myMap.keys()){
    console.log(`Key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`);
} */

for(let [key, value] of myMap){
    console.log(`Key is: ${key} and Value is: ${value}`);
}

myMap.forEach((value, key) => console.log(`Value is: ${value} and Key is: ${key}`));

myMap.delete(2);
console.log(myMap);
myMap.set(5, count+1);
console.log(myMap);