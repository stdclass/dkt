define(
[
    "fiber", 
    "field", 
    "fields/building",
    "fields/transport"
], function(
        fiber,
        Field,
        FieldBuilding, 
        FieldTransport
){
    
    var fiber = require("fiber");
    
    var FieldFactory = fiber.extend(function(){
        return {
            create: function(field){
                
                switch(field.type){
                    case 'building': return new FieldBuilding(field);
                    case 'transport': return new FieldTransport(field);
                    default: return new Field(field);
                }
            },
        }
    });
    
    // immediately instantiation - singleton only
    return new FieldFactory;
    
});