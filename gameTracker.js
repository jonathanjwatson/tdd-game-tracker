const axios = require("axios");

function GameTracker(name, score) {
  this.name = name;
  this.score = score;
}

GameTracker.prototype.getScore = function() {
  return this.score;
};

GameTracker.prototype.addToScore = function(pointsToAdd) {
  this.score = this.score + pointsToAdd;
  console.log(this);
  return this.score;
};

GameTracker.prototype.subtractFromScore = function(pointsToSubtract) {
  this.score = this.score - pointsToSubtract;
  return this.score;
};

GameTracker.prototype.getRandomScore = function() {
  axios.get("https://csrng.net/csrng/csrng.php?min=0&max=100")
    .then(response => {
      console.log(response.data[0].random);
      return response.data[0].random;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = GameTracker;
