let { startGame }= require("./src/lib.js");
const readline = require("readline-sync").question;

const readUserInput = function(){
  let size = readline("enter the size of grid: ");
  let aliveCells = readline("enter the aliveCells: ");
  aliveCells = aliveCells.split(' ');
  return {size : +size, aliveCells : aliveCells};
}

let input = readUserInput();
startGame(input);
