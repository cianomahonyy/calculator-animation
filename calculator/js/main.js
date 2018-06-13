$(document).ready(function() {
	$('#fullpage').fullpage();
});

var intCustomerRecords = 0;
var intTurnover = 0;
var total = 0;
var boolCalculated = 0;

function getValue() {
    intCustomerRecords = document.getElementById('txtRecords').value;
    intTurnover = document.getElementById('txtTurnover').value;
}

function calculateCost() {

    displayTotal = 0;
    total = 0;

    getValue();

    console.log(intTurnover);
    console.log(intCustomerRecords);

    total += intCustomerRecords * 200;
    total += 150000
    total += 170000
    total += 375000
    total += 150000
    total += 150000
    total += 120000
    total += 100000

    if (intTurnover * 0.04 > 20000000) {
        total += intTurnover * 0.04
    } else if (intTurnover * 0.4 < 20000000) {
        total += 20000000;
    }

    var displayTotal = total;

    setTimeout(function(){   
    if ((intTurnover <= 0) || (intCustomerRecords <=0)) {
        alert("Please Enter A Valid Number");
    } else {
        odometer.innerHTML = displayTotal;
        showParagraph();
        boolCalculated = 1;
    }
    }, 1000);



}



function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



function showParagraph() {
    var p = document.getElementById("interested");

    p.style.display = "block";
}