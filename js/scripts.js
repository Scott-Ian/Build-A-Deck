$("document").ready(function() {
  $("button#submitButton").click(function(event) {
    event.preventDefault();

    const suits =["clubs", "diamonds", "hearts", "spades"];
    const cards =["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
    let deck = [];

    suits.forEach(function(suit) {
      cards.forEach(function (card) {
        
        deck.push(`${card} of ${suit}`);

      })
    });

    deck.forEach(function(card){
      $("ul#cards").append(`<li>${card}</li>`);
    });
    
  });
});