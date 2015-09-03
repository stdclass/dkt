define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var Field = fiber.extend(function(){
        return {
            color: null,
            
            init: function(options){
                this.color = options.color
            },
            
            render: function(){
                
                
            }
        }
    });
    
    return Field;
    
});