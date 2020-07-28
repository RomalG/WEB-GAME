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
            this.Reset();
        }
        public Update():void{
            this.Move();
            this.CheckBound();
        }
        public Reset():void{
            this.y=Math.floor(Math.random() * 750) + 60;
            this.x=Math.floor(Math.random() * 640) - 500;
        }
        public Move():void{
            this.x+=5;
        }
        public CheckBound():void{
            if(this.x>=1999){
                this.Reset();
            }
        }
    }
}