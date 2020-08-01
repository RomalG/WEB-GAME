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
        }
        public Update():void{
            this.Move();
            this.CheckBound();
        }
        public Reset():void{}
        public Move():void{
            //----------------Reference to the 'STAGE' createjs to get mouse position--------------------
            //this.x=objects.Game.stage.mouseX;
            //this.y=objects.Game.stage.mouseY;
            //------------Keyboard controls--------------------------------------------------------------
            /*if(objects.Game.KeyboardManager.moveLeft)
            {
                this.x -= 7.5;
            }
            if(objects.Game.KeyboardManager.moveRight)
            {
                this.x += 7.5;
            }*/
            if(objects.Game.KeyboardManager.moveUp)
            {
                this.y -= 7.5;
            }
            if(objects.Game.KeyboardManager.moveDown)
            {
                this.y += 7.5;
            }

        }
        public CheckBound():void{
            //sides
            if (this.y >= 880 - this.halfW){
                //collided with boundary
                this.y= 880 - this.halfW;
            }

            if (this.y <= this.halfW){
                //collided with boundary
                this.y = this.halfW;
            }
            //back
            if (this.x >= 1900 - this.halfW){
                //collided with boundary
                this.x= 1900 - this.halfW;
            }
        }
    }
}