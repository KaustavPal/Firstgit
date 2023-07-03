const myForm=document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const phoneInput= document.querySelector("#phone");
const ul=document.querySelector("#user-info");


myForm.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    let userObj = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };
    let userObj_serialized = JSON.stringify(userObj);
    localStorage.setItem(emailInput.value, userObj_serialized); 
    let userObj_deserialized = JSON.parse(localStorage.getItem(emailInput.value));
    let li = document.createElement("li");
    let newUser = `${userObj_deserialized.name} - ${userObj_deserialized.email} - ${userObj_deserialized.phone}`;
    li.appendChild(document.createTextNode(newUser));
    ul.appendChild(li);  
}

