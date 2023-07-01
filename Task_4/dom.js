// TRAVERSING THE DOM //
let itemList = document.querySelector("#items");
// parentNode
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor="#f4f4f4";
//console.log(parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor="#f4f4f4";
console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
//console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow";

// FirstChild
console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello 1";

// lastChild
console.log(itemList.lastChild);

// lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello 4";

// nextSibling
console.log(itemList.nextSibling);
// nextElementSibling
console.log(itemList.nextElementSibling);

// previousSibling
console.log(itemList.previousSibling);
// previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color="green";


// creatElement

//creat a div
let newDiv = document.createElement("div");

// Add class
newDiv.className="hello";

// Add id
newDiv.id="hello1";

// Add attribute
newDiv.setAttribute("title", "Hello Div");

// Create text note
let newDivText = document.createTextNode("Hello");

//Add text to div
newDiv.appendChild(newDivText);
let container = document.querySelector("header .container");
let h1=document.querySelector("header h1");
container.insertBefore(newDiv, h1);
newDiv.style.fontSize = "30px";

let newH1 = document.createElement("h1");
newH1.className="item-list"
newH1.id="item-list-h1"
let newH1Text = document.createTextNode("Hello");
newH1.appendChild(newH1Text);
let items = document.querySelectorAll(".list-group-item");
itemList.insertBefore(newH1, items[0]);
newH1.style.fontSize="20px";
newH1.style.color="green";



