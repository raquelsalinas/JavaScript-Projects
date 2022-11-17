//HTML data attribute
function displayType(game) {
    var gameType = game.getAttribute("data-game-type");
    alert(gameType + " is made by " + game.innerHTML + "!");
}