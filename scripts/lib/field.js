define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Field = fiber.extend(function(){
        return {
            $el: null,
            getDomEl: function(){
                if( ! this.$el ){
                
                    this.$el = $("[data-field=" + this.id + "]");
                }
                
                return this.$el;
            },
            removePlayer: function(player){
                var $el = this.getDomEl();
                
                $el.find("#player-" + player.id).remove();
            },
            addPlayer: function(player){
                var $el = this.getDomEl();
                
                $el.find(".player-container").append(player.asHTML());
            }
        }
    });
    
    return Field;
    
});