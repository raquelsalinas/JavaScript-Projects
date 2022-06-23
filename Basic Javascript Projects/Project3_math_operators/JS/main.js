//Functions for addition, subtraction, multiplication, division
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 6 * 8;
    document.getElementById("Math3").innerHTML = "6 X 8 = " + multiplication;
}

function division_Function() {
    var division = 48 / 6;
    document.getElementById("Math4").innerHTML = "48 / 6 = " + division;
}

function all_Function() {
    var all = (1 + 2) * 10 / 2 - 5;
    document.getElementById("Math5").innerHTML = "(((1 + 2) x 10)) / 2) - 5 = " + all;
}

//Functions for remainders and negations
function modulus_Operator() {
    var modulus = 25 % 6;
    document.getElementById("Math6").innerHTML = "25 / 6 = a remainder of " + modulus;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

//Tells HTML to display increments, decrements, random numbers, and pi
var increment = 5;
increment++;
document.write("Increment: " + increment + " ");

var decrement = 5.25;
decrement--;
document.write("Decrement: " + decrement + " ");

window.alert(Math.random());

window.alert(Math.random() * 100);

document.write("PI: " + Math.PI);