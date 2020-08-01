//Immidiate Invoked Anonymous Function

(function(){
    
            //Global Game Variables
            let canvas = document.getElementById("canvas");
            let stage:createjs.Stage;

            let assetManager:createjs.LoadQueue;
            let assetManifest:any[];
            //Store current scene information
            let currentScene:objects.Scene;
            let currentState:number;

            let keyboardManager: managers.Keyboard;

            assetManifest=[
                {id:"startButton", src:"./Assets/startButton.png"},
                {id:"backButton", src:"./Assets/backButton.png"},
                {id:"nextButton", src:"./Assets/nextButton.png"},
                {id:"background", src:"./Assets/background.jpg"},
                {id:"player",src:"./Assets/spaceship.png"},
                {id:"enemy" ,src:"./Assets/enemy.png"},
                {id:"explosion", src:"./Assets/Audio/explosion.wav"},
                {id:"start_music", src:"./Assets/Audio/Title Screen.mp3"},
                {id:"play_music", src:"./Assets/Audio/Level 1.ogg"}
            ];

    function Init() {
        console.log("Initializing start");
        assetManager=new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest)
        assetManager.on("complete", Start, this);
    }

    function Start() {
        console.log("Starting Application....");
        //initialize createjs
        stage=new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate=60;
        createjs.Ticker.on("tick",Update);
        //setup default game states -- State Machine
        managers.Game.stage=stage;
        managers.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;

        keyboardManager= new managers.Keyboard;
        managers.Game.KeyboardManager=keyboardManager;

        Main();
    }

    function Update(){
        //has the stage changed since last check
        if(currentState != managers.Game.currentScene)
        {
            console.log("changing scenes to" + managers.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }



    function Main(){
        console.log("Game Starts...")
        //finite state machine
        switch(managers.Game.currentScene)
        {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene=new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene=new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
            break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene=new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
            break;
                
        }

        currentState=managers.Game.currentScene;
    }
    window.onload=Init;
}) ();