
const randomNum = Math.floor(Math.random()*100) + 1;
let attempt = 6;

const input = document.getElementById('guess-input');
const submit = document.getElementById('submit');
const preGuess = document.getElementById('pre-guess');
const guessRemain = document.getElementById('guess-remain');
const msg = document.getElementById('message');

submit.addEventListener('click', () => {
  const userNum = Number(input.value);

  if(userNum === randomNum) {
    message.textContent = "| | Hey you win the game | |";
    input.disabled = true;
    submit.disabled = ture;
  } else {
    attempt--;
    preGuess.textContent =  `previous guess : ${userNum}`;
    guessRemain.textContent = `guess remaining : ${attempt}`;

    if(attempt === 0) {
      msg.textContent = "| | you loss the game | | play aagin | |";
      input.disabled = true;
      submit.disabled = true;
    } else {
      if(userNum > randomNum) {
        msg.textContent = "| | Your guess is too high | | Try again | |";
      } else {
        msg.textContent = "| | Your guess is too low | | Try again | |";
    }
    }
  }
  input.value='';

});