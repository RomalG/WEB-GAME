module scenes{
    export class PlayScene extends objects.Scene{
        //variables
        private background:objects.Background;
        private player:objects.Player;
        //private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;
        private ScoreBoard:managers.Scoreboard;

        private backgroundMusic:createjs.AbstractSoundInstance;

        //constructor
        constructor(assetManager:createjs.LoadQueue){
            super(assetManager);

            this.Start();
        }
        public Start():void{
            //initialize variables
            this.background=new objects.Background(this.assetManager);
            this.player=new objects.Player(this.assetManager);
            //this.enemy=new objects.Enemy(this.assetManager);
            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 5;
            for(let i = 0; i< this.enemyNum; i++){
                this.enemies[i]=new objects.Enemy(this.assetManager);
            }

            this.ScoreBoard=new managers.Scoreboard();

            //Instantiate Sound
            createjs.Sound.stop();
            this.backgroundMusic=createjs.Sound.play("play_music");
            this.backgroundMusic.loop=-1;
            this.backgroundMusic.volume=0.3;
            this.Main();
        }

        public Update():void{
            //this.background.Update();
            this.player.Update();
            //this.enemy.Update();
            this.enemies.forEach(e => {
                e.Update();
                managers.Collision.Check(this.player, e);
            })
        }

        public Main():void{
            this.addChild(this.background);

            this.addChild(this.player);
            //this.addChild(this.enemy);
            this.enemies.forEach(e => {
                this.addChild(e);
            })
            this.addChild(this.ScoreBoard.scoreLabel);
            this.addChild(this.ScoreBoard.highscorelabel);
        }
    }
}