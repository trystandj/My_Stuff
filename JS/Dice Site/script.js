'use strict';

const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Function to reset all
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
};
init();

// Function to switch player
const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// Roll dice
btnRoll.addEventListener('click', function () {
    if (playing) {
        // Random number 1-6
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display dice
        diceEl.classList.remove('hidden');
                    //{dice} will be set to whatever random number that was called
        diceEl.src = `dice-${dice}.png`;

        // Check if number is not 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player and cause dice to dissapear 
            switchPlayer();
            setTimeout(function() {
                diceEl.classList.add('hidden');
              }, 190);
        }
    }
});

// Hold
btnHold.addEventListener('click', function () {
    if (playing) {
        // Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        diceEl.classList.add('hidden');
        // Check if player's score is 100 or more
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            document.getElementById(`current--${activePlayer}`).textContent = 0; 
        } else {
            // Switch to the next player
            switchPlayer();
        }
    }
});

// New Game
btnNew.addEventListener('click', init);
