'use strict';
// getting all ids n classes from HTML
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceR = document.querySelector('.dice');

// Initial value
score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
// creating array for scores
const scores = [0, 0];
// hidding the dice
diceR.classList.add('hidden');

// function to switch player
function switchPlayer() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

// rolling the dice
btnRoll.addEventListener('click', function (e) {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceR.classList.remove('hidden');
  diceR.src = `dice-${dice}.png`;

  //   if one then move to another player
  if (dice !== 1) {
    currentScore += dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  }
  // toggle through players
  else {
    switchPlayer();
  }
});
// hold button click
btnHold.addEventListener('click', function (e) {
  scores[activePlayer] += currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
  if (scores[activePlayer] >= 20) {
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceR.classList.add('hidden');
    btnRoll.classList.add('hidden');
    btnHold.classList.add('hidden');
    document.querySelector(`#name--${activePlayer}`).innerHTML = `Winner `;
  } else {
    switchPlayer();
  }
});
btnNew.addEventListener('click', function () {
  location_.reload();
});
