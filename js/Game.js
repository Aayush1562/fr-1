class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()) {
                playerCount = playerCountRef.val();
                player.getCount();

            }
            form = new Form()
            form.display();
        }
        plr1 = createSprite(200,500);
        plr1.addImage("player1",plrImg);

        plr2 = createSprite(800,500);
        plr2.addImage("player2",plrImg);

        players = [plr1,plr2];

    }

    play(){
        form.hide();

        

    }





}