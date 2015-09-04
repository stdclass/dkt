define(["fiber", "field"], function(fiber, field){
    
    var fiber = require("fiber");
    
    var Transport = field.extend(function(){
        return {
            name: "",
            init: function(options){
                this.name = options.name;
            },
            
            render: function(){
                
                
            }
        }
    });
    
    return Transport;
    
});