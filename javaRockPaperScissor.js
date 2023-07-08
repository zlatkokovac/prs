//setup variables//

let computerChoice = ''
let playerChoice = ''
let playerScore = 0
let computerScore = 0

//ALGORITHM//

// 1. computer makes a play => computerChoice is defined
// 2. player make a play => playerChoice is defined
// 3. compare scores => assign a point to the winner
// 4. update score
// 

// Computer play function - random choice//
function computerPlay() {
    let compChoice = Math.floor(Math.random()*3)+1 
    if (compChoice ==1) {
            computerChoice = 'rock'
        } else if (compChoice ==2) {
            computerChoice = 'paper'
        } else if (compChoice ==3) {
            computerChoice = 'scissor'
        }
        return computerChoice
}
computerChoice = computerPlay()
console.log("Computer choice was:", computerChoice)


// Player play - select options: using prompt()

function playerPlay(playerChoice = prompt("Chose your weapon (pick a number): \n1. rock, \n2. paper \nor \n3. scissors")) {
    if (playerChoice == "1") {
        alert("You have chosen the rock!"),
        playerChoice = "rock"
    } else if (playerChoice == "2") {
        alert("You have chosen the paper!"),
        playerChoice = "paper"
    } else if (playerChoice == "3"){
        alert("You have chosen the scissors!"),
        playerChoice = 'scissor'
    } 
    return playerChoice
}

playerChoice = playerPlay()

console.log ("Player choice was:", playerChoice)

// Game round function - takes in computerChoice and playerChoice
// Evaluates the values of both variables
// increases the corresponding score variable

function gameRound(playerChoice, computerChoice) {
    pScore = 0
    cScore = 0
    if (playerChoice == "rock" && computerChoice == 'rock') {
        alert("Round even, both chose rock - fight again!")
    } else if (playerChoice == "rock" && computerChoice == 'scissor') {
        alert("Player wins, as rock beats scissors!")
        pScore += 1
    } else if (playerChoice == "rock" && computerChoice == 'paper') {
        alert("Computer wins, as paper beats rock!")
        cScore += 1
    } else if (playerChoice == "paper" && computerChoice == 'rock') {
        alert("Player wins, as paper beats rocks!")
        pScore += 1
    } else if (playerChoice == "paper" && computerChoice == 'scissor') {
        alert("Computer wins, as scissor beats paper!")
        cScore += 1
    } else if( playerChoice == "paper" && computerChoice == 'paper' ){
        alert("Round even, both chose paper - fight again!")
    } else if (playerChoice == "scissor" && computerChoice == 'paper' ){
        alert("Player wins, as scissor beats paper!")
        pScore += 1
    } else if (playerChoice == "scissor" && computerChoice == 'rock') {
        alert("Computer wins, as rock beats scissor!")
        cScore += 1
    } else if (playerChoice == "scissor" && computerChoice == 'scissor') {
        alert("Round even, both chose scissor - fight again!")
    }
    return [pScore, cScore] 
}

let round = gameRound(playerChoice, computerChoice)

playerScore += round[0]
computerScore += round[1]

console.log ("The score so far is: \nPlayer:",playerScore, "\nComputer:",computerScore)