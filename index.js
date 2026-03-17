const options = ['Rock', 'Paper', 'Scissors'];
let score = [0, 0, 0]; // Win count, loss count, tie count

function game(playerChoice){
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    let doConfetti = false;
    let message;

    if (playerChoice === 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                score[2]++;
                message = 'It\'s a Tie!';
                break;
            case 'Paper':
                score[1]++;
                message = 'You Lost...';
                break;
            case 'Scissors':
                score[0]++;
                message = 'You Won!';
                doConfetti = true;
                break;
        }
    } else if (playerChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                score[0]++;
                message = 'You Won!';
                doConfetti = true;
                break;
            case 'Paper':
                score[2]++;
                message = 'It\'s a Tie!';
                break;
            case 'Scissors':
                score[1]++;
                message = 'You Lost...';
                break;
        }
    } else if (playerChoice === 'Scissors') {
        switch (computerChoice) {
            case 'Rock':
                score[1]++;
                message = 'You Lost...';
                break;
            case 'Paper':
                score[0]++;
                message = 'You Won!';
                doConfetti = true;
                break;
            case 'Scissors':
                score[2]++;
                message = 'It\'s a Tie!';
                break;
        }
    }
    document.getElementById('player').innerHTML = 'Player: ' + playerChoice;
    document.getElementById('computer').innerHTML = 'Computer: ' + computerChoice;
    document.getElementById('wins').innerHTML = score[0].toString();
    document.getElementById('losses').innerHTML = score[1].toString();
    document.getElementById('ties').innerHTML = score[2].toString();
    document.getElementById('message').innerHTML = message;
    if (doConfetti) {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 },
            shapes: ['circle', 'square', 'square', 'square', 'star', 'star'],
            colors: ['#e3239b', '#8023e3', '#2350e3', '#13fb16', '#dee61d', '#edb90dff', '#ed630d', '#ed0d0d'],
            disableForReducedMotion: true
        });
    }
}