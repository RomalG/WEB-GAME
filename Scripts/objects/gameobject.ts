module objects{
    export abstract class GameObject extends createjs.Bitmap{
        //Variables
        protected speedX:number;
        protected speedY:number;

        public width:number;
        public height:number;
        public halfW:number;
        public halfH:number;
        public isColliding: boolean;
        
        //Constructor
        constructor(assetManager:createjs.LoadQueue, imageString:string){
            super(assetManager.getResult(imageString));

            this.name=imageString;
            this.Init();
        }
        private Init():void{
            //Initialize all properties of my object
            this.width=this.getBounds().width;
            this.height=this.getBounds().height;
            this.halfW=this.width*0.5;
            this.halfH=this.width*0.5;

            //Registration points
            this.regX=this.halfW;
            this.regY=this.halfW;

            this.isColliding=false;
        }
            public Start():void{}
            public Update():void{}
            public Reset():void{}
            public Move():void{}
            public CheckBound():void{}
    }
}