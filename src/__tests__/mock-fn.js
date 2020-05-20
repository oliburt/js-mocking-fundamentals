const thumbWar = require("../thumb-war")
const utils = require("../utils")

test("returns winner", () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const winner = thumbWar("Olia", "Olib")
  expect(winner).toBe("Olia")

  console.log(utils.getWinner.mock)
  expect(utils.getWinner).toHaveBeenCalledTimes(2)
  expect(utils.getWinner).toHaveBeenCalledWith("Olia", "Olib")
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, "Olia", "Olib")
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, "Olia", "Olib")

  // // alternate way to test the above
  expect(utils.getWinner.mock.calls).toEqaul([
    ["Olia", "Olib"],
    ["Olia", "Olib"]
  ])

  // cleanup
  utils.getWinner = originalGetWinner
})
