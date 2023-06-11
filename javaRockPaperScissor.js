let computerChoice = ''
let playerChoice


// Computer play - random choice
function compPlay() {
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



