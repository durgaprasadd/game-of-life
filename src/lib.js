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
module.exports = { 
  initCell,
  arrangeCells
};
