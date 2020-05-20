function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return implementation(...args)
  }
  mockFn.mock = { calls: [] }
  mockFn.mockImplementation = newImplementation => (implementation = newImplementation)
  return mockFn
}

const utilsPath = require.resolve("../utils")
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1)
  }
}

const assert = require("assert")
const thumbWar = require("../thumb-war")
const utils = require("../utils")

const winner = thumbWar("Olib", "Olia")

assert.strictEqual(winner, "Olib")

assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ["Olib", "Olia"],
  ["Olib", "Olia"]
])

// cleanup
delete require.cache[utilsPath]
