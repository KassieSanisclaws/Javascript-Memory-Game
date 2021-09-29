////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const cardTiles = document.querySelectorAll("[data-cards-tile]");
const newGameButton = document.querySelector("[data-button]");
////////////////////////////////////////////////////////////////////////////////
let clickedCardTile = null;       // this variable is for when the card is clicked.//
let hasCardTileClick = false;     // this is to prevent user from clicking multiple cards.//
// document.addEventListener("DOMContentloaded", () => {
      const gameCardTilesArray = [
                {  
                   name: "gundam1", 
                   img:  "images\gundams\gundam00_img2.png"
                }, 
                {
                  name: "gundam2",
                  img:  "images\gundams\gundam00_img3.png"
                },
                {
                  name: "naruto1",
                  img:  "images\naruto\naruto_img1.png"
                },
                {
                  name: "naruto2",
                  img:  "images\naruto\naruto_img2.png"
                },
                {
                  name: "dbz1",
                  img:  "images\dragonball-z\dbz_img1.png" 
                },
                {
                  name: "dbz2",
                  img:  "images\dragonball-z\dbz_img2.png"
                },
                {
                  name: "codegeass1",
                  img:  "images\code-geass\codegeass_img1.png"
                },
                {
                  name: "codegeass2",
                  img:  "images\code-geass\codegeass_img2.png"
                },
                    ];
                        //   });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Function when the page first loads.//
function loadCardTiles(){
        gameCardTilesArray.sort(() => 0.5 - Math.random())
}
loadCardTiles()
//Creates game board.//
function createGameBoard(){
    for(let i = 0; i < gameCardTilesArray.length; i++){
        
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this is the cardTiles function.//
// cardTiles.forEach(card => {
// card.addEventListener("click", () =>{
//     // this if statement is preventing the clicked active card tile, the prevent card click and card matchclassName.//
//    if(hasCardTileClick || card === clickedCardTile || card.className.includes("match")){
//        return
//    }else{
//     // this if statement shows the card tile that was clicked image.//
//        if(card === clickedCardTile && card.className.includes("match")){
//           card.className = card.className
//           .replace("img-hidden", "")
//           .trim();
//        }
//    }
//    // working on the below function.//
   
//     card.className += "match";

//     console.log(card.getAttribute("data-cards-tile"));
// })
// })










