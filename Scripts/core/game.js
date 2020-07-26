//Immidiate Invoked Anonymous Function
(function () {
    //Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    function Init() {
        console.log("Initializing start");
        Start();
    }
    function Start() {
        console.log("Starting Application....");
        //initialize createjs
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
        //movement here
        //helloLabel.rotation += 5;
    }
    function Main() {
        console.log("Game Starts...");
        //labe instantiation
        helloLabel = new objects.label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);
        //Button instantiation
        clickMeButton = new objects.Button("./Assets/clickMeButton.png", 320, 340);
        stage.addChild(helloLabel);
        clickMeButton.regX = 150;
        clickMeButton.regY = 100;
        stage.addChild(clickMeButton);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map