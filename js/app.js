/*
 * Create a list that holds all of your cards
 */
 let cardList = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt','fa-cube','fa-anchor','fa-leaf','fa-bicycle',
                'fa-diamond','fa-bomb','fa-leaf','fa-bomb','fa-bolt','fa-bicycle',
                'fa-paper-plane-o','fa-cube']
let patti = [...card];
console.log(patti);
let card = document.getElementsByClassName('card');
let deck = document.getElementsByClassName('deck')[0];
let timer = document.querySelector('.timer');
let twinkle = document.querySelectorAll('.fa-star');
let restartButton = document.querySelector('.restart');
let moves = 0;
let counter = document.querySelector('.moves');
let interval;
let openCards = [];
let matchingCard = document.getElementsByClassName('matching');
let modal = document.getElementsByClassName('modal')[0];
/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


//shuffling card upon page load or page refresh
document.body.onload = launchGame();
//adding eventListener to launchGame function, by clicking restart button
restartButton.addEventListener('click',launchGame);
function launchGame(){
  patti = shuffle(patti);
  for (let i = 0; i<patt.length; i++){
    patti.forEach(i => deck.appendChild(i));
    patti[i].classList.remove('show','open','Matching','disabled');
  }
  showCards = [];
  //resseting number of Moves
  moves = 0;
  counter.innerHTML = moves;
  //resetting rating
  for (let i =0; i<twinkle.length; i++){
    twinkle[i].style.color = '#00a1ff';

    twinkle[i].style.display = 'inline'
  }
  //to ressets timer
  let second = 0;
  let minute = 0;
  let hour = 0;
  let  timer = document.querySelector('.timer');
  timer.innerHTML = '0 mins 0 secs';
  clearInterval(interval);
};

//applying method to open and show cards
let showCards = function () {
  this.classList.toggle('open');
  this.clsssList.toggle('show');
  this.classList.toggle('disabled');
};

//adding visible symbol's card into an array named openCards and checking weather two cards match or
 function visibleCard(){
   openCards.push(this);
   let len = openCards.length;

   if(len == 1 || Moves == 0) {
     second = 0;
     minute = 0;
     hour = 0;
     startTimer();
   }
   if(len = 1 && moves == 0) {
     second = 0;
     minute = 0;
     hour = 0;
     startTimer();
   } else if(len === 2) {
     moveCounter();
     if (openCards[0].type ===openCards[1].type) {
       matchCon();
// matchCon function run when two cards matched
}else {
  notMatching();// if two cards does't match
     }
   }
 }

//functionality when cards match
// + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
function matchCon() {
  openCards[0].classList.add('Matching', 'disabled');
  openCards[1].classList.add('Matching', 'disabled');
  openCards[0].classList.remove('show', 'open');
  openCards[1].classList.remove('show','open');
  openCards = [];
};

// when cards don't match
// if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
function notMatching(){
  openCards[0].classList.add('not_matching');
  openCards[1].classList.add('not_matching');
  disable();
  setTimeout(function(){
    openCards[0].clssList.remove('show', 'open', 'not_matching');
    openCards[1]classList.remove('show', 'open','not_matching');
    enable();
    openCards = [];
  },550);
}

// disabling card for a while two cards are flipped
function disable() {
  cards.forEach(card =>card.classList.add('disabled'));
}

//enabling cards flipping and disabling matched cards
function enable(){
  array.prototype.filter.call(patti,function(card){
    card.classList.remove('disabled');
    for let(let i = 0; i<matchingCard.length; i++){
      matchingCard[i].classList.add('disabled');
    }
  });
}

//setting game timer function
function setTimer() {
  interval = setInterval(function () {
    timer.innerHTML = minute + 'mins' + second + 'secs';
    second++;
    if (second == 60) {
      minute++;
      second = 0;
    }
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
}

// *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//setting star rating based on number of moves to flipped the cardd

function moveCounter() {
  moves++;
  counter.innerHTML = moves;
  if (moves >8 && moves < 14) {
    for (i =0; i < 3; i++) {
      if (i > 1) {
        twinkle[i].style.display = 'none';
      }
    }
  }
  else if (moves > 15) {
    for (i = 0; i < 3; i++) {
      if (i >0) {
        stars[i].style.display = 'none';
      }
    }
  }
}

// *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)



 //
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
 let hunk =function displayCards(){

 }
 cards.addEventListener('click', hunk);
