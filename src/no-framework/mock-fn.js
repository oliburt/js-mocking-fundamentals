const assert = require("assert")
const thumbWar = require("../thumb-war")
const utils = require("../utils")

function fn(implementation) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return implementation(...args)
  }
  mockFn.mock = { calls: [] }
  return mockFn
}

const originalGetWinner = utils.getWinner
utils.getWinner = fn((p1, p2) => p1)

const winner = thumbWar("Olib", "Olia")

assert.strictEqual(winner, "Olib")

assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Olib", "Olia"],
  ["Olib", "Olia"]
])

// cleanup
utils.getWinner = originalGetWinner
