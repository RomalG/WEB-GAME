//Immidiate Invoked Anonymous Function
(function () {
    //Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest;
    //Store current scene information
    var currentScene;
    var currentState;
    assetManifest = [
        { id: "startButton", src: "./Assets/startButton.png" },
        { id: "backButton", src: "./Assets/backButton.png" },
        { id: "nextButton", src: "./Assets/nextButton.png" },
        { id: "background", src: "./Assets/background.jpg" }
    ];
    function Init() {
        console.log("Initializing start");
        assetManager = new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest);
        assetManager.on("complete", Start, this);
    }
    function Start() {
        console.log("Starting Application....");
        //initialize createjs
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        //setup default game states -- State Machine
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        Main();
    }
    function Update() {
        //has the stage changed since last check
        if (currentState != objects.Game.currentScene) {
            console.log("changing scenes to" + objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("Game Starts...");
        //finite state machine
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map