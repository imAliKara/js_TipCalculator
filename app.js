var totalTip = document.getElementById("totalTip");
var totalPrice = document.getElementById("totalPrice");
let btnCalculate = document.getElementById("btnCalculate").addEventListener("click", tipCalculate);

function tipCalculate(){
    let select = document.getElementById("select").value;
    var price = document.getElementById("price").value;

    if (price == "") {
        alert("Please enter amount!");
        location.reload();
    } else {
        if (select == "null"){
            alert("Please select tips!");
        } else if (select == "10%") {
            var amount = (price * 10) / 100;
            var total = parseFloat(price) + parseFloat(amount);
            totalTip.innerHTML = "Total Tip: $" + amount.toFixed(2);
            totalPrice.innerHTML = "Total Price: $" + total.toFixed(2);
        }
        else if (select == "15%") {
            var amount = (price * 15) / 100;
            var total = parseFloat(price) + parseFloat(amount);
            totalTip.innerHTML = "Total Tip: $" + amount.toFixed(2);
            totalPrice.innerHTML = "Total Price: $" + total.toFixed(2);
        }
        else if (select == "20%") {
            var amount = (price * 20) / 100;
            var total = parseFloat(price) + parseFloat(amount);
            totalTip.innerHTML = "Total Tip: $" + amount.toFixed(2);
            totalPrice.innerHTML = "Total Price: $" + total.toFixed(2);
        }
    }
}