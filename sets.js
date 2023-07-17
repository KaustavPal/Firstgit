//How to create Set and add a value?
const mySet = new Set();
mySet.add(5);
mySet.add(20);
mySet.add(60);
mySet.add({
    name: "Kas",
    age:10
});
mySet.add("NoobBotu");
mySet.add(69.96);


//How to find the length of set?
console.log("Set size " + mySet.size);


//How to know the values in entire set?
mySet.forEach(value => {
    console.log(`Value is: ${value}`);
});


//How to know the particular value inside a set?
console.log("Does the set has 25? " + mySet.has(25));


//How to delete a value from set?
mySet.delete("NoobBotu");
console.log(mySet);


//How to for...of loop through the set?
for(let item of mySet){
    console.log(item);
}


//How to convert a set to Array?
const myArray = Array.from(mySet);
console.log(myArray);