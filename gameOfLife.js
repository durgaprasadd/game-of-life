let {
  board,
  updateState
}= require("./src/lib.js");

const startGame = function(){
  let count = 0;
  let cells = board.gridWithInput();
  while(count != 10){
    count++;
    cells = updateState(cells);
    console.log(cells);
  }
}

startGame()
