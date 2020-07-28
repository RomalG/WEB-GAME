module objects{
    export class Enemy extends objects.GameObject{
        //Varable
        //Constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager, "enemy");
            this.Start();
        }
        //Methods
        public Start():void{ 
            this.x=-50;
            this.y=320;
        }
        public Update():void{
            this.Move();
            this.CheckBound();
        }
        public Reset():void{
            //empty...for now
        }
        public Move():void{
            this.x+=0.1
        }
        public CheckBound():void{
            //Empty.....for now
        }
    }
}