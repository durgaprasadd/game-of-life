const { initCell } = require("../src/lib.js");
const assert = require('assert');

describe("initCell",function(){
  it("should return 3X3 array filled with 0",function(){
    assert.deepEqual(initCell(),[[0,0,0],[0,0,0],[0,0,0]]);
  })
})
