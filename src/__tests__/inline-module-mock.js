const thumbWar = require("../thumb-war")
const utilsMock = require("../utils")

// Previously, using the spyOn api, it is essentially still a form
// of monkey patching. It works because we are using common js but in
// an ES Module monkey patching doesn't work. Jest provides an api for
// mocking entire modules as follows:

jest.mock("../utils", () => {
  return {
    getWinner: jest.fn((p1, p2) => p1)
  }
})

test("returns winner", () => {
  const winner = thumbWar("Kent C. Dodds", "Ken Wheeler")
  expect(winner).toBe("Kent C. Dodds")
  expect(utilsMock.getWinner.mock.calls).toEqual([
    ["Kent C. Dodds", "Ken Wheeler"],
    ["Kent C. Dodds", "Ken Wheeler"]
  ])

  // cleanup, Note that the method is reset not restore like in spyOn api
  utilsMock.getWinner.mockReset()
})
