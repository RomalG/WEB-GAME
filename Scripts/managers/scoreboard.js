var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var managers;
(function (managers) {
    var Scoreboard = /** @class */ (function (_super) {
        __extends(Scoreboard, _super);
        //constructor
        function Scoreboard() {
            var _this = _super.call(this) || this;
            _this.Init();
            return _this;
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
            this.Main();
        };
        Scoreboard.prototype.Main = function () {
            this.addChild(this.scoreLabel);
            this.addChild(this.highscorelabel);
        };
        return Scoreboard;
    }(createjs.Container));
    managers.Scoreboard = Scoreboard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map