/*
 * Create a list that holds all of your cards
 */
 const icons =  ["fa fa-diamond","fa fa-paper-plane-o",
          "fa fa-anchor","fa fa-bolt","fa fa-cube","fa fa-anchor",
          "fa fa-leaf","fa fa-bicycle","fa fa-diamond","fa fa-bomb","fa fa-leaf",
          "fa fa-bomb","fa fa-bolt","fa fa-bicycle",
          "fa fa-paper-plane-o","fa fa-cube"];

const cardContainer  = document.querySelector('.deck');
let openedCard = [];
let matchedCard = [];

for (let i = 0;i<icons.length; i++){
  const card = document.createElement('li');
  card.classList.add("card");
  card.innerHTML = `<i class="${icons[i]}"></i>`;
  cardContainer.appendChild(card);
  click(card);
}

//adding addEventListener "click" to display hidden icons
function click(card){
  card.addEventListener('click',function(){
    const currentCard = this;
    const previousCard = openedCard[0];
    if(openedCard.length === 1){
      card.classList.add('open','show','disable');
      openedCard.push(this);
      compare(currentCard,previousCard);
      moveCounter();
    }else {
      currentCard.classList.add('open','show','disable');
      openedCard.push(this);
    }
  });
}
//compare function to check wheather card matched or not on the bassis
//of innerHTML property

function compare(currentCard,previousCard){
  if(currentCard.innerHTML === previousCard.innerHTML){
    currentCard.classList.add('match');
    previousCard.classList.add('match');

    matchedCard.push(currentCard,previousCard);
    openedCard = [];
    isOver();
  }else {
    setTimeout(function(){
      currentCard.classList.remove('open','show','disable');
      previousCard.classList.remove('open','show','disable');
      openedCard = [];
    },500);
  }
}

//game over alert after all card match successfully
function isOver(){
  if(matchedCard.length === icons.length){
  alert("GAME OVER!");
  }
}


//setting counter function to count number of Moves
const moveElement = document.querySelector('.moves');
let moves = 0;
function moveCounter(){
  moves++;
  moveElement.innerHTML = moves;
}

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


// *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//Adding a congratulations modal after all cards matched successfully
 function congratulations() {
   if(matchingCard.length == 16) {
      clearInterval(interval);
      let finalTime = timer.innerHTML;
      modal.classList.add('show');
      let starRating = document.querySelector('.stars').innerHTML;
      //Going to apear on the modal
      document.getElementsByClassName('final-Moves')[0].innerHTML = moves;
      document.getElementsByClassName('star-rating')[0].innerHTML = starRating;
      document.getElementsByClassName('total-time')[0].innerHTML = finalTime;
      //adding a close button to exit the ;
      exitModal()
   }
 }


 function exitModal() {
   closeIcon.addEventListener('click', function(e) {
     modal.classList.remove('show');
     playGame();
   });
 }

 //resetting Game


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
