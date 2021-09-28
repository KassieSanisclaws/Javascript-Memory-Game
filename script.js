////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// below is the query selector accessed by data type.//
const gameCardTiles = document.querySelectorAll("[data-cards-tile]");
const newGameButton = document.querySelector("[data-new-game]");
const playerStartingScoreTextElement = document.querySelector("[data-total-clicks]");
const playerGameTimerTextElement = document.querySelector("[data-game-timer]");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// variables.//
let isCardTileFlipped = false;  //Tracks if the card tile is flipped.//
let firstCardChosen = [];       //First card tile choice stored here.//
let secondCardChosen = [];      //Second card tile choice stored here.//
let gameBoardDisabled = false;  //Tracks if the user has (2) being.//
let totalClicks = 0;            //This is the score system based off least amount of clicks.//
let gameTimer = 50;             //Game timer decrementing from 50 - 0 which signals game over.//
let gameCards = Array.from(gameCardTiles);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Event listeners.//
newGameButton.addEventListener("click", newGame);                             //New game button reset game shuffle cards.//
gameCardTiles.forEach(gameCards => gameCards.addEventListener("click", flipCardTile));  //Listening for user click on card tile passing to the function.//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function for flipCardTile.//
function flipCardTile(){
// flip clicked card tile show to user.//s
if(gameBoardDisabled) return;

console.log("flipped")


// prevent clicked flipped card from register click function again.//

   
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// new game function.//
 function newGame(){
     
     console.log('working');
     
 }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function for card tile match.//
function cardTilesMatch(){
    
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// functionshuffle card tiles.//
function shuffleCardTiles(){
      gameCardTiles.forEach(gameCards => {
     let gameBoard = Math.floor(Math.random() * 16);
         gameCards.style.order = gameBoard;
      })
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is the cardTiles function.//
// gameCardTiles.forEach(card => {
// card.addEventListener("click", () =>{
// // this if statement is preventing the clicked active card tile, the prevent card click and card matchclassName.//
//    if(hasCardTileClick || card === clickedCardTile || card.className.includes("match")){
//        return
// //    }else{
// // this if statement shows the card tile that was clicked image.//
//     //    if(card === clickedCardTile && card.className.includes("match")){
//     //       card.className = card.className
//     //       .replace("img-hidden", "")
//     //       .trim();
//        }
//            card.className += "match";
// //    }
//     console.log(card.getAttribute("data-cards-tile"));
//     })
// })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////







