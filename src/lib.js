const initCell = function(){
  let cells = [];
  cells.push(new Array(3).fill(0));
  cells.push(new Array(3).fill(0));
  cells.push(new Array(3).fill(0));
  return cells;
}

let board = {
  grid:initCell()
}

exports.initCell = initCell;
