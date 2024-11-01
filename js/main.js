window.onload = loadData;

// const lambdaUrl = "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items"

//Loads the data using GET
function loadData(){
    let lambda = document.getElementById("bodyTable");
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        // lambda.innerHTML = xhr.response;
        lambda.innerHTML = ""; // no duplicates
        const items = JSON.parse(xhr.response); // parse the item
        
        // iterate through all items
        items.forEach(item => {
            //cell.appendChild(cellText);
            //row.appendChild(cell);
            var row = lambda.insertRow();
            var id = row.insertCell(0);
            var name = row.insertCell(1);
            var price = row.insertCell(2);
            var action = row.insertCell(3); 
            
            id.innerText = item.id;
            name.innerText = item.name;
            price.innerText = item.price;

            // need delete button
            let delButton = document.createElement("button");
            delButton.textContent = "Delete";
            delButton.onclick = function () { deleteData(item.id);};
            action.appendChild(delButton);
        });
    });

    xhr.open("GET", "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items");
    xhr.send();
    
}

// Deletes data using DELETE
function deleteData(id) {
        let xhr = new XMLHttpRequest();
        // lambdaUrl + itemNumber
        // const lambdaUrl = "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items" + id;
        xhr.open("DELETE", "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items/" + id);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
        // checkDelete(); // Display message that it has been deleted -- not working
}

// Send/Add data using PUT
function sendData() {
    let xhr = new XMLHttpRequest();
    xhr.open("PUT", "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items");
    xhr.setRequestHeader("Content-Type", "application/json");

    var id = document.getElementById("id");
    var name = document.getElementById("name");
    var price = document.getElementById("price");
    var check = document.getElementById("checkItemAdded");

    if (id.value != "" || name.value != "" || price.value != "") {
    xhr.send(JSON.stringify({
                "id": id.value,
                "price": price.value,
                "name": name.value
            }));
            check.textContent = "Added Item. Load the table to check";
    } else {
        check.textContent = "Cannot add empty values";
    }
}
