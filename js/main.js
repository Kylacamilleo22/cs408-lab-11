window.onload = loaded;

let lambdaUrl = "https://m14zlk7u19.execute-api.us-east-2.amazonaws.com/items"

function sendData() {
    // document.getElementById("send-data").onclick = function () {
        let xhr = new XMLHttpRequest();
        xhr.open("PUT", lambdaUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(JSON.stringify({
            "id": "1111",
            "price": 19,
            "name": "test put value"
        }));
}

function loadData(){
    let lambda = document.getElementById("myTable");
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        // lambda.innerHTML = xhr.response;
        const items = JSON.parse(xhr.response);

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