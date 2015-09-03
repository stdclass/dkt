define(["fiber", "field"], function(fiber, field){
    
    var fiber = require("fiber");
    
    var Building = field.extend(function(){
        return {
            color: null,
            name: "",
            city: null,
            init: function(options){
                this.color = options.color;
                this.name = options.name;
                this.city = options.city;
            },
            
            render: function(){
                
                
            }
        }
    });
    
    return Building;
    
});