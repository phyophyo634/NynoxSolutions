var y = document.getElementById("myDIV1");
y.style.display = "none";
var x = document.getElementById("myDIV");
x.style.display = "none"

function myFunction() {

    var x = document.getElementById("myDIV");
    
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function myFunction1() {

    var y = document.getElementById("myDIV1");

    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}