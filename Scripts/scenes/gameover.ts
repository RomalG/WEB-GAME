module scenes{
    export class GameOverScene extends objects.Scene{
        //variables
        private gameOverLabel:objects.label;
        private backButton:objects.Button;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }

        //Method
        public Start():void{
            //Initialize
            this.gameOverLabel=new objects.label("Game Over!", "40px", "Consolas", "#000000", 320, 240, true);
            this.backButton=new objects.Button(this.assetManager, "backButton", 320, 340);
            this.Main();
        }

        public Update():void{}

        public Main():void{
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void{
            managers.Game.currentScene=config.Scene.GAME;
        }
    }
}