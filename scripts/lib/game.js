define(["fiber", "player", "UI"], function(fiber, Player, UI){
    
    var fiber = require("fiber");
    
    var Game = fiber.extend(function(){
        return {
            
            activePlayerId: 0,
            players: [],
            board: null,
            playingPlayer: null,
            menues: {
                $nextMove: null
            },
            
            init: function(options){
                this.board = options.board;
                this.menues.$nextMove = $("#menu-next-move");
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
                this.activePlayerId = player.id;
            },
            
            setPlayingPlayer: function(player){
                this.playingPlayer = player;
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
                    diceTwo = Math.ceil(Math.random() * 10) % 6 + 1,
                    field;
                
                this.movePlayer(player, diceOne + diceTwo);
                
                field = this.board.getField(player.position);
                
                if( diceOne == diceTwo ){
                    this.board.logEvent(player.name + " w&uuml;rfelt Pascher mit 2 &times; " + diceOne );
                    
                    this.rollDice();
                    
                    return;
                }
                
                this.board.logEvent(player.name + " w&uuml;rfelt <b>" + diceOne + "</b> und <b>" + diceTwo + "</b>");
                
                if( player.id == this.playingPlayer.id ){
                    
                    if( typeof field.playerLanded !== "undefined" )
                        field.playerLanded(player);
                    
                }
                
                this.setNextActivePlayer();
                
            }
        }
    });
    
    return Game;
    
});