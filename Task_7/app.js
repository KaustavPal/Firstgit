const myForm=document.querySelector("#my-form");
const msg=document.querySelector(".msg");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(nameInput.value=== "" || emailInput.value===""){
        msg.classList.add("error");
        msg.innerHTML="Please enter all fields";

        setTimeout(() => msg.remove(), 3000);
    }
    else{
        localStorage.setItem(emailInput.value, nameInput.value);
    }
    
}