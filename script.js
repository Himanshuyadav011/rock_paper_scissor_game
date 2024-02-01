var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");
var userScoreValue = document.querySelector("#userScore");
var computerScoreValue = document.querySelector("#computerScore");
var gameScreen = document.querySelector(".game_screen");
var resultScreen = document.querySelector(".result_screen");
var ruleButton = document.querySelector(".rule_btn");
var ruleWrapper = document.querySelector(".rule_wrapper");
var ruleBoxCloseButton = document.querySelector(".close_btn");
var playAgain = document.querySelector("#play");
var mobilePlayButton = document.querySelector("#mobile_play");
var nextButton = document.querySelector("#next_btn");
var userPick = document.querySelector("#user");
var computerPick = document.querySelector("#computer");
var resultText = document.querySelector("#winner");
var mobileResultText = document.querySelector("#mobile_winner");
var userChoiceImage = document.querySelector("#userPickImage");
var computerChoiceImage = document.querySelector("#computerChoiceImage");
var userwiningIndicator = document.querySelector("#userwiningIndicator");
var computerwiningIndicator = document.querySelector(
    "#computerwiningIndicator"
);

let userChoice;
let computerChoice;

let userScore = localStorage.getItem("userScore") || 0;
let computerScore = localStorage.getItem("computerScore") || 0;

userScoreValue.textContent = userScore;
computerScoreValue.textContent = computerScore;

const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

const reset = () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";

    userPick.classList.remove(`${userChoice}`);
    userChoiceImage.src = "";

    computerChoiceImage.src = "";
    computerPick.classList.remove(`${computerChoice}`);

    playAgain.textContent = "PLAY AGAIN";
    userChoice = "";
    computerChoice = "";

    userwiningIndicator.style.display = "none";
    computerwiningIndicator.style.display = "none";
};

const userWins = () => {
    userScore++;
    localStorage.setItem("userScore", `${userScore}`);
    userScoreValue.textContent = userScore;
    nextButton.style.display = "flex";
    resultText.textContent = "YOU WIN";
    mobileResultText.textContent = "YOU WIN";
    userwiningIndicator.style.display = "flex";
};

const tieUp = () => {
    resultText.textContent = "TIE UP";
    mobileResultText.textContent = "TIE UP";
    playAgain.textContent = "REPLAY";
    mobilePlayButton.textContent = "REPLAY";
};

const computerWins = () => {
    computerScore++;
    localStorage.setItem("computerScore", `${computerScore}`);
    computerScoreValue.textContent = computerScore;
    nextButton.style.display = "none";
    resultText.textContent = "YOU LOST";
    mobileResultText.textContent = "YOU LOST";
    computerwiningIndicator.style.display = "flex";
};

window.onload = function() {
    reset();
};

playAgain.addEventListener("click", () => {
    reset();
});

mobilePlayButton.addEventListener("click", () => {
    reset();
});

let isRuleBoxOpen = true;
ruleButton.addEventListener("click", () => {
    if (!isRuleBoxOpen) {
        ruleWrapper.style.display = "flex";
    }
});

ruleBoxCloseButton.addEventListener("click", () => {
    ruleWrapper.style.display = "none";
    isRuleBoxOpen = false;
});

rock.addEventListener("click", () => {
    userChoice = rock.dataset.value;
    userPick.classList.add(`${userChoice}`);
    userChoiceImage.src = `assets/${userChoice}.png`;

    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    computerChoice = generateComputerChoice();
    computerChoiceImage.src = `assets/${computerChoice}.png`;
    computerPick.classList.add(`${computerChoice}`);

    if (userChoice === "rock" && computerChoice === "scissors") {
        userWins();
    } else if (userChoice === computerChoice) {
        tieUp();
    } else {
        computerWins();
    }
});

paper.addEventListener("click", () => {
    userChoice = paper.dataset.value;
    userPick.classList.add(`${userChoice}`);
    userChoiceImage.src = `assets/${userChoice}.png`;

    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    computerChoice = generateComputerChoice();
    computerChoiceImage.src = `assets/${computerChoice}.png`;
    computerPick.classList.add(`${computerChoice}`);

    if (userChoice === "paper" && computerChoice === "rock") {
        userWins();
    } else if (userChoice === computerChoice) {
        tieUp();
    } else {
        computerWins();
    }
});

scissors.addEventListener("click", () => {
    userChoice = scissors.dataset.value;
    userPick.classList.add(`${userChoice}`);
    userChoiceImage.src = `assets/${userChoice}.png`;

    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    computerChoice = generateComputerChoice();
    computerChoiceImage.src = `assets/${computerChoice}.png`;
    computerPick.classList.add(`${computerChoice}`);

    if (userChoice === "scissors" && computerChoice === "paper") {
        userWins();
    } else if (userChoice === computerChoice) {
        tieUp();
    } else {
        computerWins;
    }
});