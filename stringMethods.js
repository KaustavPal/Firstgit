let name1 = "Kaustav";
console.log(name1.length);
/*let name1 = "Kaustav\"";
console.log(name1.length);*/
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.slice(2,4));
console.log(name1.slice(2));
let name2 = name1.replace("Kaustav", "Kas");
console.log(name2);
let name3 = "Pal"
console.log(name1.concat(" ", name3, " the Dragon Slayer"));
let name4= "       KasPal           ";
console.log(name4.trim());
console.log(name4.trim().concat(" - After using .trim()"));
for(let i=0; i<name1.length; i++){
    console.log(name1[i]);
}

//name1[2]="S" - not possible