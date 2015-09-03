define(["fiber", "jquery"], function(fiber){
    
    var fiber = require("fiber");
    
    
    var Board = fiber.extend(function(){
        return {
            data: {},
            boardRotation: 0,
            $board: null,
            init: function(){
                
                $.ajax("/dkt/scripts/data/board.json").always($.proxy(function(data){
                    this.data = data;
                }, this));
                
                this.$board = $("#board");
                
                this.adaptSize();
            },
            
            adaptSize: function(){
                
                var size = $(window).height() - 200 ;
                
                this.$board.css({
                    width: size,
                    height: size
                })
            },
            
            turnLeft: function(){
                this.boardRotation += 90;
                
                if( this.boardRotation >= 360 ){
                    this.boardRotation = 0;
                }
                
                this.turn();
            },
            
            turnRight: function(){
                this.boardRotation -= 90;
                
                if( this.boardRotation < 0 ){
                    this.boardRotation = 270;
                }
                
                this.turn();
            },
            
            turn: function(deg){
                var className;
                
                className = "tilt-" + this.boardRotation;
                
                this.$board.attr("class", className)
            },
            
            render: function(){
                
                
            }
        }
    });
    
    return Board;
    
});