const { 
  initCell,
  arrangeCells
} = require("../src/lib.js");
const assert = require('assert');

describe("initCell",function(){
  it("should return 3X3 array filled with 0",function(){
    assert.deepEqual(initCell(),[[0,0,0],[0,0,0],[0,0,0]]);
  });
});

describe("arrangeCells",function(){
  it("should return updated 3X3 array with inputs",function(){
    assert.deepEqual(arrangeCells(initCell()),[[1,0,0],[0,0,1],[0,0,1]]);
  });
});
