class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    
    async start(){
      
       
        form = new Form()
        form.display();
      }
    }
    play(){
      form.hide();
      textSize(25);
      text("Game start",170,80);
     
    }
  }
  