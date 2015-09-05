define(["fiber", "field", "ui"], function(fiber, field, UI){
    
    var fiber = require("fiber");
    
    var Building = field.extend(function(){
        return {
            color: null,
            name: "",
            city: null,
            owner: null,
            init: function(options){
                this.color = options.color;
                this.name = options.name;
                this.city = options.city;
            },
            
            playerLanded: function(player){
                
                UI.hideRollDice();

                UI.showMoveOptionsBuilding();
                
                if( this.owner === null ){
                    UI.showMoveOptionsBuildingBuy();
                }else{
                    UI.hideMoveOptionsBuildingBuy();                    
                }
                
                UI.setFieldName(this.name);
            },
            
            render: function(){
                
                
            }
        }
    });
    
    return Building;
    
});