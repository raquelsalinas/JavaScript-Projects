//Tells document to display the type of value
document.write(typeof "Word" + " ");

//Tells the document to display coercion
document.write("10" + 5 + " ");

//Testing NaN
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}

//Displaying infinity
document.write(2E310 + " ");
document.write(-2E310 + " ");

//Displaying boolean values
document.write(10 > 2);
document.write(10 < 2);

//Displaying the result of a math operation in the console
console.log(2 + 2);

//Displaying booleans with comparisons
document.write(10 == 10);

document.write(3 == 11);

//Utilizing ===
X = 10;
Y = 10;
A = "10";
B = 15;
C = "15";

document.write(X === Y);
document.write(A === B);
document.write(Y === A);
document.write(A === C);

//Utilizing logical operators
document.write(5 > 2 && 10 > 4);
document.write(5 > 10 && 10 > 4);
document.write(5 > 10 || 10 > 4);
document.write(5 > 10 || 10 > 20);

//Not operators
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

function not_Function2() {
    document.getElementById("Not2").innerHTML = !(5 > 10);
}
