//Immidiate Invoked Anonymous Function
(function () {
    //Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    function Init() {
        console.log("Initializing start");
        Start();
    }
    function Start() {
        console.log("Starting Application....");
        //initialize createjs
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        stage.update();
        //movement here
        helloLabel.rotation += 5;
    }
    function Main() {
        console.log("Game Starts...");
        helloLabel = new objects.label("Hello World", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map