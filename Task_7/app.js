const myForm=document.querySelector("#my-form");
const nameInput= document.querySelector("#name");
const emailInput= document.querySelector("#email");
const phoneInput= document.querySelector("#phone");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e){
    e.preventDefault();
    const name = nameInput.value; 
    const email = emailInput.value;
    const phone = phoneInput.value;
    const userObj = {
        name,
        email,
        phone
    };

    localStorage.setItem(userObj.email, JSON.stringify(userObj));  
    showUser(userObj);
}

function showUser(userObj){
    const parentElem = document.getElementById("user-info");
    const childElem = document.createElement("li");
    childElem.textContent = `${userObj.name} - ${userObj.email} - ${userObj.phone}`;
    nameInput.value="";
    emailInput.value="";
    phoneInput.value="";
    const deleteBtn = document.createElement("input");
    deleteBtn.type="button";
    deleteBtn.value="Delete"
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.onclick = function(){
        localStorage.removeItem(userObj.email);
        parentElem.removeChild(childElem);  
    }
    const editBtn = document.createElement("input");
    editBtn.type="button";
    editBtn.value="Edit";
    editBtn.className =  "btn btn-primary btn-sm float-right edit";
    editBtn.onclick = function(){
        nameInput.value=userObj.name;
        emailInput.value=userObj.email;
        phoneInput.value=userObj.phone;
        localStorage.removeItem(userObj.email);
        parentElem.removeChild(childElem);  
    }
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);  
}


