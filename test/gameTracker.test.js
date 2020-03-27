const GameTracker = require("../gameTracker");
const axios = require("axios");

jest.mock("axios");

describe("GameTracker", () => {
  describe("getScore", () => {
    it("should return the score from the game", () => {
      const startingScore = 10;
      const newGame = new GameTracker("anything", startingScore);

      const score = newGame.getScore();

      expect(score).toEqual(startingScore);
    });
  });

  describe("addToScore", () => {
    it("should return the starting score plus the added points", () => {
      const startingScore = 10;
      const newGame = new GameTracker("anything", startingScore);
      const pointsToAdd = 5;
      const score = newGame.addToScore(pointsToAdd);

      expect(score).toEqual(startingScore + pointsToAdd);
    });
  });

  describe("subtractFromScore", () => {
    it("should return the starting score minus the subtracted points", () => {
      const startingScore = 10;
      const newGame = new GameTracker("anything", startingScore);
      const pointsToSubtract = 5;
      const score = newGame.subtractFromScore(pointsToSubtract);

      expect(score).toEqual(startingScore - pointsToSubtract);
    });
  });

  describe("getRandomScore", () => {
    it("should call axios", () => {
      // ARRANGEMENT
      const newGame = new GameTracker("anything", 10);
      axios.get = jest.fn().mockResolvedValue({ data: [{ random: 10 }] });
      // ACTION
      newGame.getRandomScore();
      // ASSERTION
      expect(axios.get).toHaveBeenCalled();
    });
  });
});
