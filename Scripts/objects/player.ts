module objects{
    export class Player extends objects.GameObject{
        //Variables
        //Constructor
        constructor(assetmanager:createjs.LoadQueue){
            super(assetmanager,"player");
            this.Start;
        }
        public Start():void{
            this.x=820;
            this.y=800;
            //resizing spaceship
            this.scaleX=0.50;
            this.scaleY=0.50;
        }
        public Update():void{
            this.Move();
            this.CheckBound();
        }
        public Reset():void{}
        public Move():void{
            //Reference to the 'STAGE' createjs to get mouse position
            this.x=objects.Game.stage.mouseX;
            this.y=objects.Game.stage.mouseY;
            //Keyboard controls

        }
        public CheckBound():void{}
    }
}