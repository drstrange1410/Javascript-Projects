let player = {
  name: 'Per',
  chips: 145,
};
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let sum = 0;

console.log(cards);

let messageEl = document.getElementById('message-el');
let cardsEl = document.querySelector('#cards-el');
let sumEL = document.querySelector('#sum-el');

let message;

let playerEl = document.querySelector('#player-el');
playerEl.textContent = player.name + ': $' + player.chips;

function getrandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstcard = getrandomCard();
  let secondcard = getrandomCard();
  cards.push(firstcard);
  cards.push(secondcard);
  sum = firstcard + secondcard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = 'Cards: ';
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
  sumEL.innerText = 'Sum: ' + sum;
  if (sum < 21) {
    message = 'Do you want to draw a new card ?';
  } else if (sum === 21) {
    message = "You've got a BlackJack";
    hasBlackjack = true;
  } else {
    message = 'You are out of the game.';
    isAlive = false;
  }
  messageEl.innerText = message;
}
function newcard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getrandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
