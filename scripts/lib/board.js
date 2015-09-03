define(["fiber", "jquery", "fieldFactory"], function(fiber, $, FieldFactory){
    
    var fiber = require("fiber");
    
    var Board = fiber.extend(function(){
        return {
            transformation: {
                rotateZ: 0,
                rotateX: 0,
                scale: 1
            },
            defaultTilt: 48,
            $board: null,
            fields: {},            
            init: function(){
                
                this.transformation.rotateX = this.defaultTilt;
                
                $.ajax("/dkt/scripts/data/board.json").always($.proxy(function(data){
                    
                    this.processData(data);
                    
                }, this));
                
                this.$board = $("#board");
                
                this.adaptSize();
                
                this.transform();
            },
            
            processData: function(data){
                
                var currentField;
                
                for( var key in data.fields ){
                    
                    currentField = data.fields[ key ];
                    
                    var x = this.fields[ parseInt(key, 10) + 1 ] = FieldFactory.create(currentField);
                    
                }
                
            },
            
            adaptSize: function(){
                
                var size = $(window).height() - 50;
                
                this.$board.css({
                    width: size,
                    height: size
                })
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