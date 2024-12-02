'use strict';

const abilities = [
    "Super Strength",
    "Flight",
    "Telekinesis",
    "Invisibility",
    "Super Speed",
    "Time Manipulator",
    "Precognition",
    "Fire Wielder",
    "Water Wielder",
    "Earth Wielder",
    "Air Wielder",
    "Vampirism",
    "Super Agility",
    "Super Intelligence",
    "Enhanced Senses",
    "Regeneration",
    "Portal Manipulation",
    "Teleportation",
    "Mind Reading",
    "Illusionist",
    "Size Manipulation",
    "Gravity Control",
    "Duplication",
    "Super Durability",
    "Enhanced Reflexes",
    "Weather Control",
    "Sonic Scream",
    "Shapeshifting",
    "Light Manipulation",
    "Shadow Manipulation",
    "Force Field Generation",
    "Enhanced Strength",
    "Enhanced Speed",
    "LivesX2",
    "Demon Summoner",
    "Magnetism",
    "Mind Reader",
    "Death Touch",
    "Seer",
    "Eyes of Medusa",
    "Eye Beams",
    "Tiny",
    "Weak",
    "Blind",
    "Slow",
    "Gigantic",
    "Robotic",
    "Combat Master"
  ];

  const commonCharacters = [
    "Superman",
    "Batman",
    "Spider-Man",
    "Wonder Woman",
    "Harry Potter",
    "Sherlock Holmes",
    "Darth Vader",
    "Luke Skywalker",
    "Iron Man",
    "Captain America",
    "The Hulk",
    "Thor",
    "Black Widow",
    "Wolverine",
    "James Bond",
    "Indiana Jones",
    "Frodo Baggins",
    "Gandalf",
    "Legolas",
    "Sauron",
    "Dracula",
    "Homer Simpson",
    "Bart Simpson",
    "Mickey Mouse",
    "Bugs Bunny",
    "SpongeBob",
    "Patrick Star",
    "The Joker",
    "The Mandalorian",
    "R2-D2",
    "C-3PO",
    "Yoda",
    "Optimus Prime",
    "Megatron",
    "Shrek",
    "Donkey",
    "Princess Leia",
    "Chewbacca",
    "Han Solo",
    "Gollum",
    "Thanos",
    "Black Panther",
    "Scarlet Witch",
    "Doctor Strange",
    "Deadpool",
    "Joker",
    "Harley Quinn",
    "The Flash",
    "Aquaman",
    "Green Lantern",
    "Robin",
    "Catwoman",
    "Groot",
    "Rocket",
    "Lara Croft",
    "Kratos",
    "Mario",
    "Luigi",
    "Link",
    "Zelda",
    "Bowser",
    "Donkey Kong",
    "Pikachu",
    "Ash",
    "Jigglypuff",
    "Yoshi",
    "Sonic",
    "Master Chief",
    "Samus",
    "Space Marine",
    "King Arthur",
    "Princess Peach",
    "Pac-Man",
    "Lara Croft",
    "Neo",
    "Agent Smith",
    "Morpheus",
    "The Terminator",
    "John Wick",
    "Jack Sparrow",
    "Davy Jones",
    "The Doctor",
    "Jason The 13th",
    "Willy Wonka",
    "Goku",
    "Naruto",
    "Dumbledore",
    "Severus Snape",
    "Hermione",
    "Ron Weasley",
    "T-Rex",
    "Jaws",
    "Hobo",
    "Mufasa",
    "Godzilla",
    "Dragon"
  ];
  
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const hero0El = document.getElementById('hero--0');
const hero1El = document.getElementById('hero--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const feature0El = document.getElementById('feature--0');
const feature1El = document.getElementById('feature--1');
const feature2El = document.getElementById('feature--2');
const feature3El = document.getElementById('feature--3');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnTie = document.querySelector('.btn--tie');
const btnReset = document.querySelector('.btn--reset');

let scores,  activePlayer, playing;

// Function to reset all
const init = function () {
  scores = [0, 0];

  activePlayer = 0;
  playing = false;

  score0El.textContent = 0;
  score1El.textContent = 0;

  feature0El.textContent = '???';
  feature1El.textContent = '???';
  feature2El.textContent = '???';
  feature3El.textContent = '???';

  hero0El.textContent = 'Hero';
  hero1El.textContent = 'Hero';

  btnNew.classList.remove('hidden');
  btnReset.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player1El.classList.remove('player--active');
};
init();

  const abilitiesLibrary = {
    // Get a random ability from the list
    getRandomAbility() {
      const randomIndex = Math.floor(Math.random() * abilities.length);
      return abilities[randomIndex];
    }
};

const commonCharactersLibrary = {
  // Get a random Character from the list
  getRandomCharacters() {
    const randomIndex = Math.floor(Math.random() * commonCharacters.length);
    return commonCharacters[randomIndex];
  }
};

btnNew.addEventListener('click', function () {
  playing = true;
  if (playing) {
    hero1El.textContent = commonCharactersLibrary.getRandomCharacters();
    hero0El.textContent = commonCharactersLibrary.getRandomCharacters();
    feature0El.textContent = abilitiesLibrary.getRandomAbility();
    feature1El.textContent = abilitiesLibrary.getRandomAbility();
    feature2El.textContent = abilitiesLibrary.getRandomAbility();
    feature3El.textContent = abilitiesLibrary.getRandomAbility();
    btnNew.classList.add('hidden');
    btnReset.classList.remove('hidden');
  }
});

//player 2
btnRoll.addEventListener('click', function () {
  activePlayer = 0;
  if (playing) {
    scores[0] += 1; // Increment the scores0 variable
    score1El.textContent = scores[0]; // Update the score display
    if (scores[activePlayer] >= 5) {
      playing = false; // End the game
      document.querySelector(`.player--1`).classList.add('player--winner'); // Add winner class
      document.querySelector(`.player--1`).classList.remove('player--active'); // Remove active class
      document.getElementById(`current--1`).textContent = 0; // Reset current score display
      btnReset.classList.toggle('hidden');
    }
    feature0El.textContent = abilitiesLibrary.getRandomAbility();
    feature1El.textContent = abilitiesLibrary.getRandomAbility();
    hero0El.textContent = commonCharactersLibrary.getRandomCharacters();
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  }
});

//player 1
btnHold.addEventListener('click', function () {
  activePlayer = 1;
  if (playing) {
    scores[1] += 1; // Increment the scores0 variable
    score0El.textContent = scores[1]; // Update the score display
    if (scores[activePlayer] >= 5) {
      playing = false; // End the game
      document.querySelector(`.player--0`).classList.add('player--winner'); // Add winner class
      document.querySelector(`.player--0`).classList.remove('player--active'); // Remove active class
      document.getElementById(`current--0`).textContent = 0; // Reset current score display
      btnReset.classList.remove('hidden');
    }
    feature2El.textContent = abilitiesLibrary.getRandomAbility();
    feature3El.textContent = abilitiesLibrary.getRandomAbility();
    hero1El.textContent = commonCharactersLibrary.getRandomCharacters();
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
  }
});

btnTie.addEventListener('click', function () {
  activePlayer = 1, 2;
  if (playing) {
    feature2El.textContent = abilitiesLibrary.getRandomAbility();
    feature3El.textContent = abilitiesLibrary.getRandomAbility();
    hero1El.textContent = commonCharactersLibrary.getRandomCharacters();
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
    feature0El.textContent = abilitiesLibrary.getRandomAbility();
    feature1El.textContent = abilitiesLibrary.getRandomAbility();
    hero0El.textContent = commonCharactersLibrary.getRandomCharacters();
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
  }
});

btnReset.addEventListener('click', init);



//random things:  can't have duplicates