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
var objects;
(function (objects) {
    var Player = /** @class */ (function (_super) {
        __extends(Player, _super);
        //Variables
        //Constructor
        function Player(assetmanager) {
            var _this = _super.call(this, assetmanager, "player") || this;
            _this.Start;
            return _this;
        }
        Player.prototype.Start = function () {
            this.x = 820;
            this.y = 800;
            //resizing spaceship
            this.scaleX = 0.50;
            this.scaleY = 0.50;
        };
        Player.prototype.Update = function () {
            this.Move();
            this.CheckBound();
        };
        Player.prototype.Reset = function () { };
        Player.prototype.Move = function () {
            //Reference to the 'STAGE' createjs to get mouse position
            this.x = objects.Game.stage.mouseX;
            this.y = objects.Game.stage.mouseY;
            //Keyboard controls
        };
        Player.prototype.CheckBound = function () { };
        return Player;
    }(objects.GameObject));
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map