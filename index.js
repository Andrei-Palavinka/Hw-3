function game() {
	let computerScore = 0;
	let userScore = 0;
	let userName = prompt ('Please, enter your name')
	if (userName === '') {
	userName = 'User';
	}

	while (computerScore < 3 && userScore < 3) {
		let userMove = prompt('Rock, Scissors, Paper... Please make your move');
		if (userMove === null) {
			alert('You aborted this game. To start new game just refresh the page.');
			break;
		}
		userMove = userMove.toLowerCase();

		while (userMove !== 'rock' && userMove !== 'scissors' && userMove !== 'paper') {
				userMove = prompt('Rock, Scissors, Paper... Please make your move');
				if (userMove === null) {
						alert('You aborted this game. To start new game just refresh the page.');
						break;
				}
				userMove = userMove.toLowerCase();
		}
		
		if (userMove === null) {
			break;
		}

		const options = ['rock', 'scissors', 'paper'];
		const computerMove = options[Math.floor(Math.random() * options.length)];
		alert(`Computer move is: ${computerMove}`);
		if ((userMove === 'rock' && computerMove === 'scissors') ||
				(userMove === 'scissors' && computerMove === 'paper') ||
				(userMove === 'paper' && computerMove === 'rock')) {
				userScore++;
				alert(`You won this round: Current count is ${userName}: ${userScore} : Computer ${computerScore}`);
		} else if (userMove === computerMove) {
				continue;
    } else {
				computerScore++;
				alert(`Computer won this round: Current count is ${userName}: ${userScore} : Computer ${computerScore}`);
		}
	}

	if (computerScore === 3) {
			alert(`Sorry. You lost this game. Count - You: ${userScore} : Computer ${computerScore}`);
			if (confirm('Do you want to start new game?')) {
				game();
			}
	} else if (userScore === 3) {
			alert(`Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`);
			if (confirm('Do you want to start new game?')) {
				game();
			}
	}
}

setTimeout(game, 2000);