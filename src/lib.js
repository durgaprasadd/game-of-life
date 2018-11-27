const initCell = function(){
  let cells = [];
  cells.push(new Array(3).fill(0));
  cells.push(new Array(3).fill(0));
  cells.push(new Array(3).fill(0));
  return cells;
}

const arrangeCells = function(cells){
  cells[0][0]=1;
  cells[1][2]=1;
  cells[2][2]=1;
  return cells;
}

let board = {
  grid : initCell(),
  gridWithInput : function(){
                    return arrangeCells(this.grid);
                  }
};

module.exports = { 
  initCell,
  arrangeCells
};
