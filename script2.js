const moveOptions = ['rock', 'paper','scissors'];

// build the game
function playRPS() {
    for (i=0;i<=2;i++){
        const chosenItem = prompt('What are you choosing: rock, paper or scissors?').toLowerCase();
            const computerChoice = moveOptions[Math.floor(Math.random() * moveOptions.length)];
            alert(`You have chosen ${chosenItem}. The computer has chosen ${computerChoice}`);
            const outcome = findWinner(chosenItem, computerChoice);
            alert(outcome);
            if (outcome == "You win!"){
                break;
            }
    }

}

function findWinner(chosenItem, computerChoice){
        if (chosenItem == computerChoice){
            return 'The game is a tie!';
        }
        else if (
            chosenItem === 'rock' && computerChoice === 'scissors' ||
            chosenItem === 'scissors' && computerChoice === 'paper' ||
            chosenItem === 'paper' && computerChoice === 'rock'
            ){
            return "You win!";
            }
        else {
            return "The computer wins!";
        }
    }