//Global variable
var x = 10;
function Add_numbers_1() {
    document.write(20 + x + "<br>");
}
function Add_numbers_2() {
    document.write(x + 100 + "<br>");
}
Add_numbers_1();
Add_numbers_2();

//Local variable
function Add_numbers_3() {
    var y = 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    console.log(y + 100);
}
Add_numbers_3();
Add_numbers_4();

//If statement
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

//Time function
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}


//Function using if, else, and else if conditional statements
function Color_Function() {
    Color = document.getElementById("Color").value;
    if (Color == "Purple") {
        Same = "We have the same favorite color!";
    } else if (Color == "Peach") {
        Same = "I also like that color!";
    } else {
        Same = "We don't like the same colors."
    }
    document.getElementById("Favorite_Color").innerHTML = Same;
}