<!DOCTYPE html>
<html lang='en-us'>

<head>
  <meta charset='UTF-8'></meta>

   <!-- <script src="game.js"></script>  -->
 
  <title>Psychic Game</title>
</head>

<body>

	<div id='game'>
		<p>Try to guess which letter the computer is thinking!</p>
	</div>
	<button onclick= 'location.reload()'>Play Again</button>

<script language='javascript' type='text/javascript'>
		
		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		var wins = 0;
		var losses = 0;
		var guesses = 10;
		var guessedLetters = []; 
		var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];
		
		document.onkeyup = function() {
			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
			return(userGuess);
			guessedLetters.push(userGuess);
			
		
    function ComputerGenerate(computerChoice) {
				console.log(computerChoice);
				return computerChoice}

				// var computerChoice = alphabet[Math.floor(Math.random()*alphabet.length)];


				console.log(computerChoice);
				return computerChoice;
			

		for (guesses = 10; guesses > 0; guesses--) {
			console.log("number of guesses remaining: " + guesses)
			  // log guessed letters to the empty array
		  

			if (userGuess == computerChoice) {
				wins++
				alert('you win');
	
			} else if 
				((userGuess != computerChoice) && (guesses >0)) { 
				guesses--
				alert('guess again');

			} else if 
				((userGuess != computerChoice) && (guesses ===0)) {
				losses++
				alert('you lose');

			} else {
				alert('we didnt recognize your guess, please try again')
			}
		}
		}
		  
		

		
		
			
			// if (userGuess== 'a' || userGuess== 'b' || userGuess== 'c' || userGuess== 'd' || userGuess== 'e' || userGuess== 'f' || userGuess== 'g' || userGuess== 'h' || userGuess === 'i' || userGuess === 'j' || userGuess === 'k' || userGuess ===  'l' || userGuess === 'm' || userGuess === 'n' || userGuess === 'o' || userGuess === 'p' || userGuess === 'q' || userGuess === 'r' || userGuess === 's' || userGuess === 't' ||userGuess === 'u' || userGuess === 'v' || userGuess === 'w' || userGuess === 'x' || userGuess === 'y' || 'z') {
			// 		alert('good choice!');
			// 	} else {
			// 		alert('please choose a letter from the alphabet');
			// 	}
			// }



		
		// var html = '<p>Try to guess which letter the computer is thinking!</p>' + 
		// 	'<p>wins: ' + wins +'</p>' + 
		// 	'<p>losses: ' + losses + '</p>' +
		// 	'<p>guesses: ' + guesses + '</p>' +
		// 	'<p>Guessed Letters: ' + guessedLetters + '</p>';

		// document.querySelector('#game').innerHTML = html;



	// function display() {
	// 	var wins = document.getElementbyId("wins");
	// }



 document.getElementbyId('wins').innerHTML = 'Wins: ' + wins;
document.getElementbyId('losses').innerHTML = 'Losses: ' + losses;
document.getElementbyId('guesses').innerHTML = 'Guesses Remaining: ' + guesses;
document.getElementbyId('guessedLetters').innerHTML = ' Guessed Letters: ' + guessedLetters;





</script>


</body>
</html>



