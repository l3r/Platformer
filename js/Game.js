var Game = (function () {


    function Game() {
 
        Graphics.init();

        this.canvas = Graphics.createCanvas("gameCanvas");
        this.canvasContext = this.canvas.getContext("2d");
		
        Physics.init(this.canvas);
			
       
        Physics.init(this.canvas);  
        this.playerOne = new Player(10,10, Physics.PLAYER_ONE, Physics.PLATFORM | Physics.PLAYER_TWO_BALL | Physics.PLAYER_TWO);  
		

    }

    Game.prototype.update = function () {
      
      //update code ...this.canvas
      this.playerOne.update();
	 
    };

    Game.prototype.draw = function () {
      this.playerOne.Draw(this.canvasContext);
      //draw code ...

      /*var img = AssetManager.images["placeHolderImage"]; // Get my image from the asset manager

      this.canvasContext.drawImage(
        img,
        this.canvas.width/2 - img.width/2,
        this.canvas.height/2 - img.height/2
      )*/

    };

    Game.prototype.step = function () {
        
        Physics.world.Step(
              (1 / 60)   
           , 10       //velocity iterations
           , 10       //position iterations
        );
       Physics.world.DrawDebugData();
       Physics.world.ClearForces();

    };

    return Game;
})();
