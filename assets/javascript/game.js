//alphabet array for the computer & user to choose from	
		var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	//scoring variables
    var wins = 0;
		var losses = 0;
		var guesses = 10;
		var guessedLetters = []; 
		var computerChoice = "";
		

		//sets random computer choice
  	var computerLetter = [Math.floor(Math.random()*alphabet.length)];
				computerChoice = alphabet[computerLetter];
				console.log(computerChoice);

		var guessesLeft = function() {
			document.querySelector('#guesses').innerHTML = "Guesses Remaining: " + guesses;
		};

		var newComputerChoice = function() {
			this.computerChoice = this.alphabet[Math.floor(Math.random()*this.alphabet.length)];
			document
		};


		//reset function to be called when game is over
		var reset = function() {
			resetGuesses = 10;
			guesses = 10;
			guessedLetters = [];
			guessesLeft();
			newComputerChoice();
			newGuessedLetters();
		};

		//calling upon functions to update
		guessesLeft();
		newComputerChoice();

		//user guess
		document.onkeyup = function(event) {
			guesses--;
			var userGuess = String.fromCharCode(event.keycode).toLowerCase();
			console.log(userGuess);
			return (userGuess);
			guessedLetters.push(userGuess);
			guessesLeft();
			newGuessedLetters();

			//if-else statements
			if (guesses > 0) {
				if (userGuess === computerChoice) {
					wins++;
					document.querySelector("#wins").innerHTML = "Wins: " + wins;
					alert("you win");
					reset();
				}
			} else if (guesses === 0) {
					losses++;
					document.querySelector("#losses").innerHTML = "Losses: " + losses;
					alert("you lose");
					reset();
			}

		}

	