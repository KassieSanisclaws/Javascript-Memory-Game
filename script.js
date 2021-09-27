
const cardTiles = document.querySelectorAll("[data-cards-tile]");
const newGameButton = document.querySelector("[data-button]");
// this variable is for when the card is clicked.//
let clickedCardTile = null;
// this is to prevent user from clicking multiple cards.//
let hasCardTileClick = false;



// this is the cardTiles function.//
cardTiles.forEach(card => {
card.addEventListener("click", () =>{
    // this if statement is preventing the clicked active card tile, the prevent card click and card matchclassName.//
   if(hasCardTileClick || card === clickedCardTile || card.className.includes("match")){
       return
   }else{
    // this if statement shows the card tile that was clicked image.//
       if(card === clickedCardTile && card.className.includes("match")){
          card.className = card.className
          .replace("img-hidden", "")
          .trim();
       }
   }
   // working on the below function.//
   
    card.className += "match";

    console.log(card.getAttribute("data-cards-tile"));
})
})

newGameButton.addEventListener("click", button => {
    // memoryGame.newGame();

})

// this is the newGame function.//





