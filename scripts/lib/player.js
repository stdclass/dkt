define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Player = fiber.extend(function(){
        return {
            id: 0,
            name: "",
            color: "",
            position: 0,
            
            init: function(options){
                this.id = options.id;
                this.name = options.name;
                this.color = options.color;
                this.position = options.position || 1;
            },
            asHTML: function(){
                return '<div id="player-' + this.id + '" class="player player-' + this.color + '">' + this.id + '</div>'
            }
        }
    });
    
    return Player;
    
});