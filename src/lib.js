const readline = require("readline-sync").question;

const startGame = function(input){
  let grid = initCell(input.size);
  grid = arrangeCells(grid,input.aliveCells);
  for(let count=0;count<10;count++){
    grid = updateState(grid);
    console.log(grid);
  }
}

const initCell = function(size){
  let cells = [];
  for(let index=0;index<size;index++){
    cells.push(new Array(size).fill(0));
  }
  return cells;
}

const arrangeCells = function(cells,inputs){
  let size = cells.length;
  for(let index = 0; index<inputs.length; index++){
    cells[Math.floor((inputs[index]-1)/size)][(inputs[index]-1)%size]=1;
  }
  return cells;
}

const readUserInput = function(){
  let size = readline("enter the size of grid: ");
  let aliveCells = readline("enter the aliveCells: ");
  aliveCells = aliveCells.split(' ');
  return {size : +size, aliveCells : aliveCells};
}

let possibleCombinations = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];

const generatePossibleNeighbours = function(currPosition){
  return function(list){
    let rowIndex = currPosition[0]+list[0];
    let columnIndex = currPosition[1]+list[1];
    return [rowIndex,columnIndex];
  }
}

const checkValidNeighbour = function(grid){
  return function(position){
    return grid[position[0]]!=undefined && grid[position[1]]!=undefined;
  }
}

const generateValidCombinations = function(grid,currPosition){
  //allDeltas.map(delta => currentPosition.add(delta)).filter(validNeighbour(grid));

  let possibleNeighbours = possibleCombinations.map(generatePossibleNeighbours(currPosition));
  return possibleNeighbours.filter(checkValidNeighbour(grid));
}

const checkState = function(grid){
  return function(object,position){
    object[grid[position[0]][position[1]]].push(position);
    return object;
  }
}

const checkNeighbourState = function(grid,position){
  let validCombinations = generateValidCombinations(grid,position);
  return validCombinations.reduce(checkState(grid),{1:[],0:[]});
}

const checkNextState = function(neighbourStates,currState){
  let aliveNeighbour = neighbourStates[1].length;
  let state = [[0,0,0,1,0,0,0,0,0],[0,0,1,1,0,0,0,0,0]];
  return state[currState][aliveNeighbour];
}

const updateState = function(grid){
  let result = grid.map(x=>x.slice());
  for(let rowIndex=0;rowIndex<grid.length;rowIndex++){
    for(let columnIndex=0;columnIndex<grid.length;columnIndex++){
      let neighbourStates = checkNeighbourState(grid,[rowIndex,columnIndex]);
      let nextState = checkNextState(neighbourStates,grid[rowIndex][columnIndex]);
      result[rowIndex][columnIndex] = nextState;
    }
  }
  return result;
}

module.exports = { 
  initCell,
  arrangeCells,
  generateValidCombinations,
  checkValidNeighbour,
  generatePossibleNeighbours,
  checkNeighbourState,
  checkNextState,
  updateState,
  startGame
};
