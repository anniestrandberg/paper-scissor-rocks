var gamerButtons = document.querySelectorAll('.gamer-button');
var gamerResult = document.getElementById('gamer-result');
var computerText = document.getElementById('computer-result');
var displayWinner = document.querySelector('#display-winner');
var displayPlayerScore = document.getElementById('player-score');
var displayComputerScore = document.getElementById('computer-score');
var displayWinnerPopup = document.querySelector('.display-winner-popup');
var resetGameButton = document.querySelector('.reset-button');
var scoreLow = document.getElementById('score-low');
var scoreHigh = document.getElementById('score-high');

var playerChoice = "";
var computerChoice = "";
var isWinner = '';

var computerWinsText = "Datorn vann";
var playerWinsText = "Du vann";
var playerScore = 0;
var computerScore = 0;

var playerWins = false;
var computerWins = false;
var noOneWins = false;

var maxScore = 5;

for(var i = 0; i < gamerButtons.length; i++){
    gamerButtons[i].addEventListener('click', function(e){
        playerChoice = e.target.textContent;
        gamerResult.setAttribute("src", "images/" + playerChoice + ".png");
        computerChoice = computerResult();
        computerText.setAttribute("src", "images/" + computerChoice + ".png");
        

        if(computerChoice == playerChoice){
            noOneWins = true;
        } else if (computerChoice == 'Sten' && playerChoice == 'Sax'){
           computerWins = true;
        } else if (computerChoice == 'Sten' && playerChoice == 'Påse'){
            playerWins = true;
        } else if(computerChoice == 'Sax' && playerChoice == 'Sten'){
            playerWins = true;
        } else if (computerChoice == 'Sax' && playerChoice == 'Påse'){
            computerWins = true;
        } else if (computerChoice == 'Påse' && playerChoice == 'Sten'){
            computerWins = true;
        } else if (computerChoice == 'Påse' && playerChoice == 'Sax'){
            playerWins = true;
        }

        if(computerWins == true){
            displayWinner.textContent = computerWinsText;
            computerScore++;
            displayComputerScore.textContent = computerScore;
        } 

        if(playerWins == true){
            displayWinner.textContent = playerWinsText;
            playerScore++;
            displayPlayerScore.textContent = playerScore;
        }

        if(noOneWins == true){
            displayWinner.textContent = "OAVGJORT!";
        }


        if(playerScore >= maxScore){
            displayWinnerPopup.classList.add('show-display-winner-popup');
            var h4 = document.createElement('h4');
            displayWinnerPopup.appendChild(h4);
            h4.textContent = playerWinsText;
           
        } 
        if(computerScore >= maxScore){
            displayWinnerPopup.classList.add('show-display-winner-popup');
            var h4 = document.createElement('h4');
            displayWinnerPopup.appendChild(h4);
            h4.textContent = computerWinsText;
        } 

        playerWins = false;
        computerWins = false;
        noOneWins = false;
    });
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
}

function computerResult(){
    var number = Math.floor(Math.random() * 3) + 1;

    
    var computerChoice = "";
        if(number == 1) {
            computerChoice = 'Sten';
        } else if (number == 2){
            computerChoice = 'Sax';
        } else {
            computerChoice = 'Påse';
    }
    return computerChoice;
}

resetGameButton.addEventListener('click', resetGame);

function resetGame(){
    resetScore();
    displayWinnerPopup.classList.remove('show-display-winner-popup');
    h4 = document.querySelector('.display-winner-popup h4');
    displayWinnerPopup.removeChild(h4);
}

scoreHigh.addEventListener('click', function(){
    maxScore = 10;
});

scoreLow.addEventListener('click', function(){
    maxScore = 5;
});