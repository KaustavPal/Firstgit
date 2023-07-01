// QUERYSELECTIOR //

//let header = document.querySelector("#main-header");
//header.style.borderBottom = "solid 4px #ccc";

//let input = document.querySelector("input");
//input.value="Hello World";

//var submit = document.querySelector("input[type='submit']");
//submit.value = "SEND";

//let item = document.querySelector(".list-group-item");
//item.style.color = "red";

//let lastItem = document.querySelector(".list-group-item:last-child");
//lastItem.style.color="blue";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor="green";

let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.display="none";

// QUERYSELECTORALL //

//let titles = document.querySelectorAll(".title");
//console.log(titles);
//titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = "green";
}

even[0].style.color="green";

