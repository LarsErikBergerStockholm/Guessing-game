// Spel värden
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Lyssna på guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  // validera guessInput
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  // kolla om Vinna
  if(guess === winningNum){

  gameOver(true, `${winningNum} is correct, YOU WIN!`);

  } else {
  // fel gissning
    guessesLeft -= 1;

    if(guessesLeft === 0){
      // Game over

    gameOver(false, `GAME OVER - YOU LOOSE! The correct number is ${winningNum}...`);


    } else {

      // Border röd
      guessInput.style.borderColor = 'red';

      guessInput.value = '';

      // spel fortsätter - spelet fortsätter
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left...`, 'red');
    }
  }
});

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  // Border green
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // set message
  setMessage(msg);

  // forsätt att spela
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';

}

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
