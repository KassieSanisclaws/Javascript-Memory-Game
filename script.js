////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// below is the query selector accessed by data type.//
const gameCardTiles = document.querySelectorAll("[data-cards-tile]");
const resetGameButton = document.querySelector("[data-reset-game]");
const playerScoreTextElement = document.querySelector("[data-total-clicks]");
const playerGameTimerTextElement = document.querySelector("[data-game-timer]");
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// variables.//
let isCardTileFlipped = false;                  //Tracks if the card tile is flipped.//
let firstCardTileChosen, secondCardTileChosen;  //First card tile choice stored here.//+//Second card tile choice stored here.// 
let gameBoardDisabled = false;                  //Tracks if the user has (2) being.//
let totalClicks = 0;                            //This is the score system based off least amount of clicks.//
let gameTimer = 50;                             //Game timer decrementing from 50 - 0 which signals game over.//

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Event listeners.//
resetGameButton.addEventListener("click", resetGameButton);   //New game button reset game shuffle cards.//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class MemoryGameBoard {
    constructor(gameCardTiles){
        this.gameCardTiles = gameCardTiles;
    }

//Function for flipCardTile.//
  flipCardTile(){
    console.log("flipped")
  }

//Function for match card tile.//
  cardTilesMatch(){
    console.log("Match")
}

//Function for card tile shuffle.//
  shuffleCardTiles(){
     this.gameCardTiles = this.gameCardTiles.forEach(gameCards => {
         let randomCardTiles = Math.floor(Math.random() *16);
         gameCards.style.order = randomCardTiles;
     })
    console.log("shuffled")
}
 
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const memoryGameBoard = new MemoryGameBoard(gameCardTiles)
/////////////////////////////////////////////////////////////
//GameCardTiles holding the array of the card tiles.//
gameCardTiles.forEach(gameCards => {
    gameCards.addEventListener("click", () => {
        memoryGameBoard.flipCardTile(gameCards.innerText)
    });
});  
////////////////////////////////////////////////////////////
//Reset game board button.//

resetGameButton.addEventListener("click", button => {
         memoryGameBoard.shuffleCardTiles()
   
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// class constructor to hold the memory game functions.//
class MemoryGame {
    constructor(playerScoreTextElement, playerGameTimerTextElement){
         this.playerScoreTextElement = playerScoreTextElement;
         this.playerGameTimerTextElement = playerGameTimerTextElement;
         resetGame()
    }

resetGame(){
     this.playerScoreTextElement = 0;
     this.playerGameTimerTextElement = "";

  }


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










