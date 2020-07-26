//Immidiate Invoked Anonymous Function

(function(){
    
            //Global Game Variables
            let canvas = document.getElementById("canvas");
            let stage:createjs.Stage;
            let helloLabel:objects.label;
            let clickMeButton:objects.Button;
            let assetManager:createjs.LoadQueue;
            let assetManifest:any[];

            assetManifest=[
                {id:"clickMeButton", src:"./Assets/clickMeButton.png"}
            ];

    function Init() {
        console.log("Initializing start");
        assetManager=new createjs.LoadQueue();
        assetManager.installPlugin(createjs.Sound);
        assetManager.loadManifest(assetManifest)
        assetManager.on("complete", Start, this);
        //Start();
        
    }

    function Start() {
        console.log("Starting Application....");
        //initialize createjs
        stage=new createjs.Stage(canvas);
        stage.enableMouseOver(20);

        createjs.Ticker.framerate=60;
        createjs.Ticker.on("tick",Update);
        Main();
    }

    function Update(){
        stage.update();
        //movement here
        //helloLabel.rotation += 5;
    }

    function clickMeButtonClicked():void{
        helloLabel.text="Starting.....";
        console.log("Start button clicked.....");
    }

    function Main(){
        console.log("Game Starts...")
        //labe instantiation
        helloLabel=new objects.label("The Burning Stars", "40px", "Consolas", "#000000",320,240, true);
        //Button instantiation
        clickMeButton=new objects.Button(assetManager, "clickMeButton", 320, 340)
        stage.addChild(helloLabel);
        clickMeButton.regX=150;
        clickMeButton.regY=100;
        clickMeButton.on("click", clickMeButtonClicked);

        stage.addChild(clickMeButton);
    }
    window.onload=Init;
}) ();