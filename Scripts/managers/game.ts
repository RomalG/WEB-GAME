module managers{
    export class Game{
        //Global variables
        public static stage: createjs.Stage;
        public static assetManager: createjs.LoadQueue;
        public static currentScene: number;
        public static KeyboardManager: managers.Keyboard;
    }
}