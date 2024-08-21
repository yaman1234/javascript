'use strict';
let secretNumber;
let guess;
let score = 20;
let highscore = 0;

// Generate random number
secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number';
  }
  //   In case of correct guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct Guess';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // change the style
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
  }
  //   In case of incorrect guess
  else if (guess !== secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over';
      document.querySelector('.check').disabled = true;
      // change the style
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  }

  /*
  else if (guess > secretNumber) {
    if (score > 0) {
    
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over';
      document.querySelector('.check').disabled = true;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over';
      document.querySelector('.check').disabled = true;
    }
  }

  */
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  console.log(secretNumber);
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.check').disabled = false;

  // change the style
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
