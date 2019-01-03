/*
 * Create a list that holds all of your cards
 */
 const cardList = ['fa-diamond','fa-paper-plane-o','fa-anchor','fa-bolt',
                   'fa-cube','fa-anchor','fa-leaf','fa-bicycle',
                'fa-diamond','fa-bomb','fa-leaf','fa-bomb','fa-bolt',
                'fa-bicycle','fa-paper-plane-o','fa-cube'];

const cardContainer  = document.querySelector('.deck');
let openedCard = [];
let matchedCard = [];

for (let i = 0;i<cardList.length; i++){
  const card = document.createElement('li');
  card.classList.add("card");
  card.innerHTML = `<i class="${cardList[i]}"></i>`;
  cardContainer.appendChild(card);
}


function click(card){
  card.addEventListener('click',function(){
    const currentCard = this;
    const previousCard = openedCard[0];
    if(openedCard.length === 1){
      card.classList.add('open','show','disable');
      openedCard.push(this);
    }else {
      currentCard.classList.add('open','show','disable');
      openedCard.push(this);
    }
  });
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
 function reset() {
   modal.classList.remove('show');
   playGame();
 }
//Adding event Listener to each cards (click)
for (let i = 0; i < cards.length; i++) {
  card = cards[i];
  card.addEventListener('click',showCards);
  card.addEventListener('click', visibleCard);
  card.addEventListener('click',congratulations);
}

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
