const { 
  initCell,
  arrangeCells,
  generateValidCombinations,
  checkValidNeighbour,
  generatePossibleNeighbours,
  checkNeighbourState
} = require("../src/lib.js");
const assert = require('assert');

describe("initCell",function(){
  it("should return 3X3 array filled with 0",function(){
    assert.deepEqual(initCell(),[[0,0,0],[0,0,0],[0,0,0]]);
  });
});

describe("arrangeCells",function(){
  it("should return updated 3X3 array with inputs",function(){
    assert.deepEqual(arrangeCells(initCell(),[,,1,6,9]),[[1,0,0],[0,0,1],[0,0,1]]);
  });
});

describe('valid combinations',function(){
  it('should return valid neighbours for given position',function(){
    assert.deepEqual(generateValidCombinations(initCell(),[0,0]),[[0,1],[1,0],[1,1]]);
  });
});

describe('check valid neighbour',function(){
  let checkPosition = checkValidNeighbour(initCell());
  it('should return true if the position valid',function(){
    assert.deepEqual(checkPosition([0,0]),true);
  });
  it('should return false if the position is not valid',function(){
    assert.deepEqual(checkPosition([0,-1]),false);
    assert.deepEqual(checkPosition([-1,0]),false);
  });
});

describe('generate possible neighbour',function(){
  let calculateNeighbour = generatePossibleNeighbours([0,2]);
  it('should return all the 8 possible neighbour of the given position',function(){
    assert.deepEqual(calculateNeighbour([-1,-1]),[-1,1]);
  });
});

describe("checkNeighbourState",function(){
 it("should return object containing alive and dead cells",function(){
   let grid = [[0,1,0],[1,0,0],[0,1,0]];
   let position = [0,0];
   assert.deepEqual(checkNeighbourState(grid,position),{1:[[0,1],[1,0]],0:[[1,1]]});
   position = [1,0];
   assert.deepEqual(checkNeighbourState(grid,position),{1:[[0,1],[2,1]],0:[[0,0],[1,1],[2,0]]});
   position = [2,2];
   assert.deepEqual(checkNeighbourState(grid,position),{1:[[2,1]],0:[[1,1],[1,2]]});
 });
});
