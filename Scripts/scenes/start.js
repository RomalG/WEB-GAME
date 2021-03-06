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
var scenes;
(function (scenes) {
    var StartScene = /** @class */ (function (_super) {
        __extends(StartScene, _super);
        //constructors
        function StartScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        //methods
        StartScene.prototype.Start = function () {
            //initialize the objects for this scene
            this.background = new objects.Background(this.assetManager);
            this.welcomeLabel = new objects.label("The Burning Stars", "60px", "Consolas", "#FFFFFF", 950, 240, true);
            //NOTE : PreloadJS manifest id 
            this.startButton = new objects.Button(this.assetManager, "nextButton", 700, 300);
            //Instantiate sound
            this.backgroundMusic = createjs.Sound.play("start_music");
            this.backgroundMusic.loop = -1;
            this.backgroundMusic.volume = 0.3;
            this.Main();
        };
        StartScene.prototype.Update = function () {
            //this.background.Update();
        };
        StartScene.prototype.Main = function () {
            //Add items to  the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        };
        StartScene.prototype.startButtonClick = function () {
            //change from Start to game scene
            managers.Game.currentScene = config.Scene.GAME;
        };
        return StartScene;
    }(objects.Scene));
    scenes.StartScene = StartScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=start.js.map