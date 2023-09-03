const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const userObj = {
    name,
    email,
    phone,
  };

  axios
    .post(
      "https://crudcrud.com/api/76fc417dc32c4ca78bf04e0c245a48c7/apointmentData",
      userObj
    )
    .then((response) => {
      showUser(response);
    })
    .catch((err) => {
      document.body.innerHTML += `<h4>Something went Wrong</h4>`;
      console.log(err);
    });

  // localStorage.setItem(userObj.email, JSON.stringify(userObj));
  //showUser(userObj);
}

function showUser(response) {
  const parentElem = document.getElementById("user-info");
  const childElem = document.createElement("li");
  console.log(response.data.name);
  childElem.textContent = `${response.data.name} - ${response.data.email} - ${response.data.phone}`;
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  const deleteBtn = document.createElement("input");
  deleteBtn.type = "button";
  deleteBtn.value = "Delete";
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.onclick = function () {
    // localStorage.removeItem(userObj.email);
    // parentElem.removeChild(childElem);
  };
  const editBtn = document.createElement("input");
  editBtn.type = "button";
  editBtn.value = "Edit";
  editBtn.className = "btn btn-primary btn-sm float-right edit";
  editBtn.onclick = function () {
    nameInput.value = userObj.name;
    emailInput.value = userObj.email;
    phoneInput.value = userObj.phone;
    // localStorage.removeItem(userObj.email);
    // parentElem.removeChild(childElem);
  };
  childElem.appendChild(deleteBtn);
  childElem.appendChild(editBtn);
  parentElem.appendChild(childElem);
}
