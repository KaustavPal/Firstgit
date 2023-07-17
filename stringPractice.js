let sentence = "The quick brown fox jump over the lazzy dog.";
let word ="fox";
let word1="fox1";
console.log(sentence.includes(word));
console.log(sentence.includes(word1));
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not"} in the sentence`);
console.log(sentence.startsWith("quick"));
console.log(sentence.startsWith("The"));
console.log(sentence.endsWith("quick"));
console.log(sentence.endsWith("dog."));

let str ="Please give Rs 1000";
//let amount = Number.parseInt(str.slice("Please give Rs ".length));
//let amount = Number.parseInt(str.slice(15));
let amount = Number.parseInt(str.slice(-4));
console.log(amount);
console.log(typeof(amount));

let name1 = "Kaspal";
let name2= name1.replace("p", "P");
console.log(name1);
console.log(name2);