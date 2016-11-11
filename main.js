var cards = [];
var currentCard;

function back() {
  console.log(1);
};

function refresh() {
  shuffle(cards);
  console.log(cards);
};

function initCards() {
  cards = [];
  for(var i = 0; i < 54; i++) {
    cards.push(i + 1);
  }
  refresh();
};

function shuffle (array) {
  var i = 0, j = 0, temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
};

function next() {
  currentCard = cards.pop();
  document.getElementById('currentCard').src = "img/" + currentCard + ".png";
}
