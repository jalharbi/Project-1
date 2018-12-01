
console.log("Tic Tac Toe");
// add event to the botton 
var setButton = document.querySelector('#buttonSubmit');
// console.log(setButton);
var playerName = document.querySelector('.userName');
var PlayerNameTwo = document.querySelector('.userName2');
// BRING USERNAMR 1

function bringValue() {
    console.log('brining value')
    var userValue = playerName.value;
    console.log(userValue);
    return userValue;

    // console.log(bringValue); 
}
// BRING USERNAMR 2
function bringValueTwo() {
    var userTwoVal = PlayerNameTwo.value;
    return userTwoVal;
}

if (setButton !== null) {
    setButton.addEventListener('click', function () {
        console.log('click');
        var playerInput = bringValue();
        // var playerInput = bringValueOne; 
        window.localStorage.setItem('playerName', playerInput);
        var playerTwoInput = bringValueTwo();
        window.localStorage.setItem('playerName2', playerTwoInput);
    });
}


var playerOne = document.querySelector('#playerName');
console.log(playerOne);
// var playerTwo = document.querySelectorAll('.playerOne');

var getPlayerOne = window.localStorage.getItem('playerName');

// console.log('', getPlayerOne);
playerOne.innerHTML = getPlayerOne;

console.log(getPlayerOne);
// var getPlayerOne =  window.localStorage.getItem();

var buttons = document.querySelectorAll('.button');

// PLAYER TWO : USERNAME
var playerTwo = document.querySelector('#playerName2');
var getPlayerTwo = window.localStorage.getItem('playerName2');
playerTwo.innerHTML = getPlayerTwo;
console.log(getPlayerTwo);

//ADD image for the winner
var img = document.createElement('img');
img.src = "congrats.png"
var src = document.getElementById('massage');
// STYLING THE IMG 
img.style.width = '150px';
img.style.height = '80px';
img.style.position = 'absolute';
img.style.verticalAlign = 'middle';

// GAME LOGIC 

var currentPlayer = 'X';

buttons.forEach(function (box) {
    // console.log(box);

    // function for the massage 
    function setMassage(msg) {
        document.querySelector('#massage').innerHTML = msg;
    }




    box.addEventListener('click', function () {

        if (currentPlayer == 'X') {


            if (box.innerHTML == "") {
                box.innerHTML = 'X';

                if (whoIsTheWinner(currentPlayer)) {
                    setMassage('Congratulations' + " " + currentPlayer + "! You win !");
                    console.log("h");
                    src.appendChild(img);


                } else {
                    currentPlayer = 'O'

                    setMassage('its' + " " + currentPlayer + "'s turn!");
                }

            }
        } else {

            if (box.innerHTML == "") {
                box.innerHTML = 'O';
                if (whoIsTheWinner(currentPlayer)) {
                    setMassage('Congratulations' + " " + currentPlayer + "! You win !");
                    src.appendChild(img);


                } else {
                    currentPlayer = 'X'
                    setMassage('its' + " " + currentPlayer + "'s turn!");
                }
            }
        }


    });
});


// buttons.forEach(function (removeClick){
//     removeClick.removeEventListener('click');

//    })
// function for the row
function checkRow(a, b, c, currentPlayer) { // currentPlayer = X
    var result = false;
    if (insideBox(a) == currentPlayer && insideBox(b) == currentPlayer && insideBox(c) == currentPlayer) {
        result = true;
        console.log('checkRow');
    }
    return result;
}



// function for the get the box number 
// CALL ALL Button and CHECK 
function insideBox(number) {
    var boxValue = document.querySelectorAll('#b' + number)[0].innerHTML;
    console.log(boxValue);
    return boxValue;
}


// function for the winner 

function whoIsTheWinner(currentPlayer) {
    var result = false;
    if (checkRow(1, 2, 3, currentPlayer) ||
        checkRow(4, 5, 6, currentPlayer) ||
        checkRow(7, 8, 9, currentPlayer) ||
        checkRow(1, 4, 7, currentPlayer) ||
        checkRow(2, 5, 8, currentPlayer) ||
        checkRow(3, 6, 9, currentPlayer) ||
        checkRow(1, 5, 9, currentPlayer) ||
        checkRow(3, 5, 7, currentPlayer)) {

        result = true;
    }
    return result;
}
