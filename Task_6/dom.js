let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");


// Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);
// Filter event
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    let newItem = document.getElementById("item").value;
    let newDescription = document.getElementById("description").value;

    // Create new li element
    let li = document.createElement("li");
    let br = document.createElement("br");
    //Add class
    li.className = "list-group-item";
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    
    li.appendChild(document.createTextNode(newDescription));

    //Create delete button element
    let deleteBtn = document.createElement("button");

    //Add classes to delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //Append text node
    deleteBtn.appendChild(document.createTextNode("X"));

    //Create edit button
    let editBtn = document.createElement("button");
    //Add classes to edit button
    editBtn.classList="btn btn-primary btn-sm float-right edit";
    //Appemd text node
    editBtn.appendChild(document.createTextNode("Edit"));


    //Append button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn); 
    

    //Append li to list
    itemList.appendChild(li);

}

//Remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName("li");
    //Convert to an array
    Array.from(items).forEach(function(item){
        let itemName=item.firstChild.textContent;
        let itemDescription=item.childNodes[1].textContent;
        if(itemName.toLocaleLowerCase().indexOf(text) != -1 || itemDescription.toLocaleLowerCase().indexOf(text) != -1){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    })
}
