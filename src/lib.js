const initCell = function(){
  let cells = [];
  cells.push(new Array(3).fill(0));
  cells.push(new Array(3).fill(0));
  cells.push(new Array(3).fill(0));
  return cells;
}

const arrangeCells = function(cells,inputs){
  for(let index = 2; index<inputs.length; index++){
    cells[Math.floor((inputs[index]-1)/3)][(inputs[index]-1)%3]=1;
  }
  return cells;
}

let board = {
  grid : initCell(),
  gridWithInput : function(){
                    return arrangeCells(this.grid,process.argv);
                  }
};

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

const validCombinations = function(grid,currPosition){
   let possibleNeighbours = possibleCombinations.map(generatePossibleNeighbours(currPosition));
  return possibleNeighbours.filter(checkValidNeighbour(grid));
}

module.exports = { 
  initCell,
  arrangeCells,
  validCombinations,
  checkValidNeighbour,
  generatePossibleNeighbours
};
