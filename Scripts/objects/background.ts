module objects{
    export class Background extends createjs.Bitmap{
        //Variables
        private speedY:number=5;
        //constructor
        constructor(assetManager:createjs.LoadQueue)
        {
            super(assetManager.getResult("background"));
            console.log("Creating the background........")
            this.Start();
        }
        //Functions
        public Start():void{
            this.Reset();
        }
        public Update():void{
            this.Move();
            this.CheckBound();
        }
        public Reset():void{
            //Reset my background Y position
            console.log("RESET!");
        }
        public Move():void{
            this.y+=this.speedY;
        }

        //Collision Detection
        public CheckBound():void{
            if(this.y>=0){
                this.Reset();
            }
        }
    }
}