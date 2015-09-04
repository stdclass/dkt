define(["fiber", "player"], function(fiber, Player){
    
    var fiber = require("fiber");
    
    var Game = fiber.extend(function(){
        return {
            
            activePlayerId: 0,
            players: [],
            board: null,
            
            init: function(options){
                this.board = options.board;
            },
            
            
            addPlayer: function(options){

                var player;
                
                options.id = this.players.length;
                
                player = new Player(options);
                
                this.players.push( player );
                
                this.movePlayer( player, 0 );
                
                return player;
                
            },
            
            getPlayer: function(id){
                return this.players[id];
            },
            
            removePlayer: function(player){
                this.board.getField(player.position).removePlayer(player);
                delete this.players[player.id];
            },
            
            movePlayer: function(player, steps){
                
                var currentField = this.board.getField(player.position),
                    destinationField;
                
                
                player.position += steps;
                
                if( player.position > this.board.maxField ){
                    player.position = player.position - this.board.maxField;
                }
                
                destinationField = this.board.getField(player.position);
                
                currentField && currentField.removePlayer(player);
                destinationField && destinationField.addPlayer(player);
                
                return player;
            },
            
            setActivePlayer: function(player){
                console.log(player);
                this.activePlayerId = player.id;
            },
            
            setNextActivePlayer: function(){
                this.activePlayerId++;
                
                if(this.activePlayerId >= this.players.length ){
                    this.activePlayerId = 0;
                }
            },
            
            getActivePlayer: function(){
                return this.getPlayer(this.activePlayerId);
            },
            
            rollDice: function(){
                var player = this.getActivePlayer(),
                    diceOne = Math.ceil(Math.random() * 10) % 6 + 1,
                    diceTwo = Math.ceil(Math.random() * 10) % 6 + 1;
                
                this.movePlayer(player, diceOne + diceTwo);
                
                if( diceOne == diceTwo ){
                    this.board.logEvent(player.name + " w&uuml;rfelt Pascher mit 2 &times; " + diceOne );
                    
                    this.rollDice();
                    
                    return;
                }
                
                this.board.logEvent(player.name + " w&uuml;rfelt <b>" + diceOne + "</b> und <b>" + diceTwo + "</b>");
                
                this.setNextActivePlayer();
                
            }
        }
    });
    
    return Game;
    
});