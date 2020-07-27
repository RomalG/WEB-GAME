module objects{
    export class Background extends createjs.Bitmap{
        //Variables

        //constructor
        constructor(assetManager:createjs.LoadQueue)
        {
            super(assetManager.getResult("background"));
            console.log("Creating the background........")
            this.Start();
        }
        //Functions
        public Start():void{}
        public Update():void{}
        public Reset():void{}
        public Move():void{}

        //Collision Detection
        public CheckBound():void{}
    }
}