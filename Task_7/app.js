const myForm=document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");


myForm.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    let userObj = {
        name: nameInput.value,
        email: emailInput.value
    };
    let userObj_serialized = JSON.stringify(userObj);
    console.log(userObj_serialized);
    localStorage.setItem("user", userObj_serialized);   
}
