//Examine the document object//
//console.log(document);

//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title=123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[11]);
//document.all[11].textContent="Hello";
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GETELEMENTBYID //

//console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent="Hello";
//headerTitle.innerText="Goodbye";
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
//headerTitle.innerHTML="<h3>Hello</h3>"
header.style.borderBottom = "solid 3px #000";
let addItems=document.getElementById("add-items");
console.log(addItems);
addItems.style.fontWeight = "bold";
addItems.style.color="green";


