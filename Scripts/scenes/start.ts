module scenes{
    export class StartScene extends objects.Scene{
        //variables
        private background:objects.Background;
        private welcomeLabel:objects.label;
        private startButton:objects.Button;

        //constructors
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);
            this.Start();
        }

        //methods
        public Start():void{
            //initialize the objects for this scene
            this.background=new objects.Background(this.assetManager);
            this.welcomeLabel=new objects.label("The Burning Stars!!!!","60px","Consolas","#000000",320,240,true);
            //NOTE : PreloadJS manifest id 
            this.startButton=new objects.Button(this.assetManager,"nextButton",320,300);
            this.Main();
        }

        public Update():void{}

        public Main():void{
            //Add items to  the scene
            this.addChild(this.background);
            this.addChild(this.welcomeLabel);
            this.addChild(this.startButton);
            this.startButton.on("click", this.startButtonClick);
        }

        public startButtonClick():void{
            //change from Start to game scene
            objects.Game.currentScene = config.Scene.GAME;
        }
    }
}