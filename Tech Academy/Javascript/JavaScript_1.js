//Switch function
function Game_Function() {
    var Game_Output;
    var Games = document.getElementById("Game_input").value;
    var Game_String = " is a great game!";
    switch(Games) {
        case "Bloodborne":
            Game_Output = "Bloodborne" + Game_String;
        break;
        case "Elden Ring":
            Game_Output = "Elden Ring" + Game_String;
        break;
        case "Skyrim":
            Game_Output = "Skyrim" + Game_String;
        break;
        case "Brawlhalla":
            Game_Output = "Brawlhalla" + Game_String;
        break;
        case "Stardew Valley":
            Game_Output = "Stardew Valley" + Game_String;
        break;
        default:
        Game_Output = "Please enter a game exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Game_Output;
}

//getElementByClassName
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}