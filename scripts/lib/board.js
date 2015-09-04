define(["fiber", "jquery", "fieldFactory", "player", "game"], function(fiber, $, FieldFactory, Player, Game){
    
    var fiber = require("fiber");
    
    var Board = fiber.extend(function(){
        return {
            transformation: {
                rotateZ: 0,
                rotateX: 0,
                scale: 1
            },
            defaultTilt: 48,
            maxField: 40,
            $board: null,
            $logContainer: null,
            fields: {},
            onReady: $.noop,
            game: null,
            
            init: function(){
                
                this.transformation.rotateX = this.defaultTilt;
                
                $.ajax("/dkt/scripts/data/board.json").always($.proxy(function(data){
                    
                    this.processData(data);
                    
                    this.onReady();
                    
                }, this));
                
                this.$board = $("#board");
                this.$logContainer = $("#log-container");
                
                this.adaptSize();
                
                this.transform();
                
                this.game = new Game({
                    board: this
                })
            },
            
            addPlayer: function(player){
                return this.game.addPlayer(player);
            },
            
            setBeginningPlayer: function(player){
                this.game.setActivePlayer(player);
            },
            
            rollDice: function(){
                
                this.playSound("roll-dice");
                
                setTimeout($.proxy(function(){

                    this.game.rollDice();
                    
                }, this), 1500);
            },
            
            playSound: function(sound){
                $("#sound-" + sound).get(0).play();
            },

            ready: function(callback){
                this.onReady = callback;
            },
            
            logEvent: function(message){
                this.$logContainer.prepend('<div class="log">' + message + '</div>');
            },
            
            
            processData: function(data){
                
                var currentField,
                    id;
                
                for( var key in data.fields ){
                    
                    currentField = data.fields[ key ];
                    id = parseInt(key, 10) + 1;
                    
                    this.fields[ id ] = FieldFactory.create(currentField);
                    this.fields[ id ] && ( this.fields[ id ].id = id );
                }
                
            },
            
            adaptSize: function(){
                
                var size = $(window).height() - 80;
                
                this.$board.css({
                    width: size,
                    height: size
                });
                
            },
            
            getField: function(num){
                return this.fields[num];
            },
            
            turnLeft: function(){
                this.transformation.rotateZ += 90;                
                this.transform();
            },
            
            turnRight: function(){
                this.transformation.rotateZ -= 90;                
                this.transform();
            },
            
            disable3d: function(){
                this.transformation.rotateX = 0;
                this.transform();
            },
            
            enable3d: function(){
                this.transformation.rotateX = this.defaultTilt;
                this.transform();
            },
            
            zoomIn: function(){
                this.transformation.scale += 0.2;
                this.transform();
            },
            
            zoomOut: function(){
                this.transformation.scale -= 0.2;
                this.transform();
            },
            
            zoomDefault: function(){
                this.transformation.scale = 1;
                this.transform();
            },
            
            transform: function(){
                this.$board.css("transform", "scale( " + this.transformation.scale + " ) perspective(1000px) rotateX( " + this.transformation.rotateX + "deg ) rotateZ( " + this.transformation.rotateZ + "deg )")
            },
            
            resize: function(){
                this.adaptSize();
            },
            
            render: function(){
                
                
            }
        }
    });
    
    return Board;
    
});