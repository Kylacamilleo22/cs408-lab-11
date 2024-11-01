window.onload = loaded;

let lambdaUrl = "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items"

function loadData(){
    let lambda = document.getElementById("myTable");
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        // lambda.innerHTML = xhr.response;
        lambda.innerHTML = ""; // no duplicates
        const items = JSON.parse(xhr.response);

        var title = lambda.insertRow();
        var idTitle = title.insertCell(0);
        var nameTitle = title.insertCell(1);
        var priceTitle = title.insertCell(2);
        // var idTitle = title.insertCell(3);

        idTitle.innerText = "ID";
        nameTitle.innerText = "name";
        priceTitle.innerText = "price";
        
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

        });
    });

        xhr.open("GET", "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items");
        xhr.send();
    
}

function deleteData() {
    // document.getElementById("delete-data").onclick = function () {
        let xhr = new XMLHttpRequest();
        // lambdaUrl + itemNumber
        xhr.open("DELETE", "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items/1111");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
    
}
function sendData() {
    // document.getElementById("send-data").onclick = function () {
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
                check.textContent = "Added Item. Load table to check";
        } else {
            check.textContent = "Cannot add empty values";
        }
        
    
}
