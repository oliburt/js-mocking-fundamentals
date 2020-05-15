const assert = require("assert")
const thumbWar = require("../thumb-war")
const utils = require("../utils")


// Here we monkey patch the supposed random/expenisve 
// function (which could be third party) and we are 
// trying to test the functionality of our own function 
// so we replace this function with something 
// predictable
const originalGetWinner = utils.getWinner
utils.getWinner = (a, b) => b

const winner = thumbWar("Olib", "Olia")

assert.strictEqual(winner, "Olia")

// restore/cleanup the module to original state
utils.getWinner = originalGetWinner
