const thumbWar = require("../thumb-war")
const utils = require("../utils")

// It can be annoying to have to keep track of a mocked function
// and restoring it at the end of the test.
// Jest exposes the spyOn api to simplify this
test("returns winner", () => {
  jest.spyOn(utils, "getWinner")

  utils.getWinner.mockImplementation((p1, p2) => p1)

  const winner = thumbWar("Olib", "Olia")
  expect(winner).toBe("Olib")
  expect(utils.getWinner.mock.calls).toEqual([
    ["Olib", "Olia"],
    ["Olib", "Olia"]
  ])

  utils.getWinner.mockRestore()
})
