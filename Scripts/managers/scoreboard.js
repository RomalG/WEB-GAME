var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function () {
        //constructor
        function Scoreboard() {
            this.Init();
        }
        Object.defineProperty(Scoreboard.prototype, "Score", {
            get: function () {
                return this.Score;
            },
            set: function (newScore) {
                this.score = newScore;
                this.scoreLabel.text = "Score : " + this.score;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Scoreboard.prototype, "HighScore", {
            get: function () {
                return this.highScore;
            },
            set: function (newHighScore) {
                this.HighScore = newHighScore;
                this.highscorelabel.text = "High Score : " + this.highScore;
            },
            enumerable: false,
            configurable: true
        });
        //methods 
        Scoreboard.prototype.Init = function () {
            //Create our labels
            this.scoreLabel = new objects.label("Score:999999", "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.highscorelabel = new objects.label("Highscore : 0", "20px", "Consolas", "#FFFF00", 1680, 10, false);
            //set a default score
            this.score = 0;
            this.highScore = 0;
        };
        return Scoreboard;
    }());
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map