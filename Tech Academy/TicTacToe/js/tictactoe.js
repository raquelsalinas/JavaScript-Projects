//Variable keeps track of whose turn it is
let activePlayer = 'X';
//Array stores an array of moves used to determine win conditions
let selectedSquares = [];

//Function for placing an x or o in square
function placeXOrO(squareNumber) {
    //Condition ensures a square hasn't been selected already
    //.some method used to check each element of the selectSquare array to see if it contains square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //Variable retrieves the HTML element id that was clicked
        let select = document.getElementById(squareNumber);
        //Condition checks who's turn it is
        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' then it must be 'O'
        } else {
            //If activePlayer is equal to 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //Calls a function to check for any win conditions
        checkWinConditions();
        //Condition is for changing the active player
        if (activePlayer === 'X') {
            //If active player is 'X' change in to 'O'
            activePlayer = 'O';
            //If active player is anything other that 'X'
        } else {
            //Change activePlayer to 'X'
            activePlayer = 'X';
        }
        //Function plays placement sound
        audio('./media/place.mp3');
        //Condition checks to see if it is computers turn
        if (activePlayer === 'O') {
            //Function disables clicking for computers turn
            disableClick();
            //Function waits 1 second before computer places an image and enables click 
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for computersTurn() function to work
        return true;
    }
    //Function results in a random swuare being selected by computer
    function computersTurn() {
        //Boolean is needed for while loop
        let success = false;
        //Variable stores a random number 0-8
        let pickASquare;
        //Condition allows our while loop to keep trying if a square is selected already
        while (!success) {
            //Random number between 0-8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            //If random number evaluated returns true, the square hasn't been selected yet
            if (placeXOrO(pickASquare)) {
                //Line calls the function
                placeXOrO(pickASquare);
                //Changes our boolean and ends loop
                success = true;
            };
        }
    }
}

//Function parses the selectedSquares array to search for win conditions
//drawLine() function is called to draw a line on screen if condition is met
function checkWinConditions() {
    // X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //Condition checks for a tie
    //If none of the above conditions are met and 9 squares are selected the code executes
    else if (selectedSquares.length >= 9) {
        //Function plays the tie game sound
        audio('./media/tie.mp3');
        //Function sets a .3 second timer before resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //Function checks if an array includes 3 strings. It is used to check for each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //If 3 variables we pass are all included in our array then true is retured and our else if condition executes the drawLine() function
        if (a === true && b === true && c === true) { return true; }
    }
}

//Function makes our body element temporarily unclickable
function disableClick() {
    //Makes body unclickable
    body.style.pointerEvents = 'none';
    //Makes body clickable again after 1 second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//Function takes a string parameter of path set earlier for placement sound
function audio(audioURL) {
    //Create a new object and pass path as a parameter
    let audio = new Audio(audioURL);
    //Play method plays our sound
    audio.play();
}

//Function utilizes HTML canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //Line accesses HTML canvas element
    const canvas = document.getElementById('win-lines');
    //Line gives access to methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //Line indicates where start of a lines x axis is
    let x1 = coordX1,
        //Line indicates where start of a lines y axis is
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    //Function interacts with canvas
    function animateLineDrawing() {
        //Variable creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //Method clears content from the last loop interaction
        c.clearRect(0,0,608,608);
        //Method starts a new path
        c.beginPath();
        //Method moves to a starting point in line
        c.moveTo(x1, y1);
        //Method indicates the end point in line
        c.lineTo(x, y);
        //Method sets width of line
        c.lineWidth = 10;
        //Method sets color of line
        c.strokeStyle = 'rgba(70,255,33,.8)';
        //Method draws everything laid out above
        c.stroke();
        //Condition checks if endpoints were reached
        if (x1 <= x2 && y1 <= y2) {
            //Condition adds 10 to previous end x endpoint
            if (x < x2) { x += 10; }
            //Condition adds 10 to previous end y endpoint
            if (y < y2) { y += 10; }
            //Condition necessary for 6, 4, 2 win conditions
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //Condition necessary for 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //Function clears canvas after win line is drawn
    function clear() {
        //Line starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //Line clears canvas
        c.clearRect(0,0,608,608);
        //Line stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //Line disallows clicking while win sound is playing
    disableClick();
    audio('./media/winGame.mp3');
    //Line calls main animation loop
    animateLineDrawing();
    //Line waits 1 second, clears canvas, resets game, then allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//Function resets game in event of tie or win
function resetGame() {
    //For loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //Variable gets HTML element i
        let square = document.getElementById(String(i));
        //Removes element backgroundImage
        square.style.backgroundImage = '';
    }
    //Resets array so it is empty and can be started over
    selectedSquares = [];
}