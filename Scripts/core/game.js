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
        { id: "nextButton", src: "./Assets/nextButton.png" }
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
        Main();
    }
    function Update() {
        stage.update();
    }
    function Main() {
        console.log("Game Starts...");
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map