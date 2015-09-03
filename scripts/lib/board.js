define(["fiber", "jquery", "fieldFactory", "player"], function(fiber, $, FieldFactory, Player){
    
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
            fields: {},
            players: {},
            init: function(){
                
                this.transformation.rotateX = this.defaultTilt;
                
                $.ajax("/dkt/scripts/data/board.json").always($.proxy(function(data){
                    
                    this.processData(data);
                    
                }, this));
                
                this.$board = $("#board");
                
                this.adaptSize();
                
                this.transform();
            },
            
            addPlayer: function(options){
                this.players[options.id] = new Player(options);
            },
            
            getPlayer: function(id){
                return this.players[id];
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
                
                var size = $(window).height() - 50;
                
                this.$board.css({
                    width: size,
                    height: size
                })
            },
            
            movePlayer: function(playerId, steps){
                
                var player = this.getPlayer(playerId),
                    currentField = this.getField(player.position),
                    destinationField;
                
                player.position += steps;
                
                if( player.position > this.maxField ){
                    player.position = player.position - this.maxField;
                }
                
                destinationField = this.getField(player.position);
                
                currentField && currentField.removePlayer(player);
                destinationField && destinationField.addPlayer(player);
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