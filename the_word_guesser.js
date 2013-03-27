var word //create it outside of the function for global variables
var lettersGuessed // then you give it a value inside the function

function guessLetter (guessedLetter) {
	lettersGuessed = ['', '', '', '', '', ''];
	word = ['B', 'A', 'N', 'A', 'N', 'A'];
	for (var i = 0; i < word.length; i = i + 1) {
		if (word[i] == guessedLetter) {
			lettersGuessed[i] = word[i] 
			console.log("Congrats you found a letter!")
		}
	}
console.log(lettersGuessed)
}

guessLetter('B')
