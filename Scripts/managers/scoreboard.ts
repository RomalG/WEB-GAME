module managers{
    export class Scoreboard{
        //Variables
        public scoreLabel:objects.label;
        public highscorelabel:objects.label;
        private score: number;
        private highScore: number;

        get Score():number{
            return this.Score;
        }

        set Score(newScore:number){
            this.score=newScore;
            this.scoreLabel.text="Score : "+this.score;
        }

        get HighScore():number{
            return this.highScore;
        }

        set HighScore(newHighScore:number){
            this.HighScore= newHighScore;
            this.highscorelabel.text="High Score : "+this.highScore;
        }

        //constructor
        constructor(){
            this.Init();
        }
        //methods 
        private Init():void{
            //Create our labels
            this.scoreLabel=new objects.label("Score:999999","20px","Consolas","#FFFF00", 10,10,false);
            this.highscorelabel=new objects.label("Highscore : 0","20px","Consolas","#FFFF00",1680,10,false);
            //set a default score
            this.score=0;
            this.highScore=0;
        } 
    }
}