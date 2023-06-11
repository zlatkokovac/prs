//setup variables//

let computerChoice = ''
let playerChoice = ''
let playerScore = 0
let computerScore = 0

//ALGORITHM//

// 1. computer makes a play => compChoice is defined
// 2. player make a play => playerChoice is defined
// 3. compare scores => assign a point to the winner
// 4. update score
// 

// Computer play - random choice//
function computerPlay() {
    let computerChoice = Math.floor(Math.random()*3)+1 
    if (computerChoice ==1) {
            computerChoice = 'rock'
        } else if (computerChoice ==2) {
            computerChoice = 'paper'
        } else if (computerChoice ==3) {
            computerChoice = 'scissor'
        }
        return computerChoice
}

console.log("Computer choice was:", computerPlay())

// Player play - select options //
// using prompt()