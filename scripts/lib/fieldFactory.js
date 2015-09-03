define(["fiber", "fields/building"], function(fiber, FieldBuilding){
    
    var fiber = require("fiber");
    
    var FieldFactory = fiber.extend(function(){
        return {
            create: function(field){
                
                switch(field.type){
                    case 'building': return new FieldBuilding(field);
                }
            },
        }
    });
    
    // immediately instantiation - singleton only
    return new FieldFactory;
    
});