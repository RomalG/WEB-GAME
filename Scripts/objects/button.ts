module objects{
    export class Button extends createjs.Bitmap{
        //Variables
        //Constructors
        constructor(assetManager:createjs.LoadQueue, imageString:string, x:number=0, y:number=0){
            super(assetManager.getResult(imageString));
            //Default position
            this.x=x;
            this.y=y;
            //Event handlers
            this.on("mouseover", this.mouseOver);
            this.on("mouseout",this.mouseOut);
        }
        //Methods
        //Event handlers
        private mouseOver():void{
            this.alpha=0.7;
        }
        private mouseOut():void{
            this.alpha=1;
        }

    }
}