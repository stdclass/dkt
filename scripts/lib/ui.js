define(["fiber"], function(fiber){
    
    var fiber = require("fiber");
    
    var UI = fiber.extend(function(){
        return {
            $rollDice: null,
            $moveOptionsBuilding: null,
            $moveFieldName: null,
            init: function(options){
                this.$rollDice = $("#roll-dice");
                this.$moveOptionsBuilding = $("#move-options-building");
                this.$moveFieldName = $("#move-field-name");
                this.$moveOptionsBuildingBuy = $("#move-options-building-buy");
            },
            
            hideRollDice: function(){
                this.$rollDice.hide();
            },
            
            showRollDice: function(){
                this.$rollDice.show();
            },
            
            hideMoveOptionsBuilding: function(){
                this.$moveOptionsBuilding.hide();
            },
            
            showMoveOptionsBuilding: function(){
                this.$moveOptionsBuilding.show();
            },
            
            hideMoveOptionsBuildingBuy: function(){
                this.$moveOptionsBuildingBuy.hide();
            },
            
            showMoveOptionsBuildingBuy: function(){
                this.$moveOptionsBuildingBuy.show();
            },
            
            setFieldName: function(name){
                this.$moveFieldName.html(name);
            }
            
        }
    });
    
    // singleton
    return new UI;
    
});