require.config({
    baseUrl: "scripts/lib",
    paths: {
        fiber: '../vendor/fiber.min',
        jquery: '../vendor/jquery-2.1.4'
    },
    urlArgs: "bust=" + (new Date()).getTime()
});

require(
    [
        "board",
        "jquery"
    ], 
    function(
        Board,
        $
    ){
    
    var $container = document.getElementById("container");
    
    var Board = new Board;
    
    // when board data is loaded
    Board.ready(function(){
        
        var phill = Board.addPlayer({
            name: "Phillip",
            color: "blue", 
            money: 650
        });
        
        Board.addPlayer({
            name: "Alex",
            color: "green",
            money: 650
        });
        
        Board.addPlayer({
            name: "Thomas",
            color: "red",
            money: 650
        });
        
        Board.addPlayer({
            name: "Laurin",
            color: "yellow",
            money: 650
        });
        
        Board.setBeginningPlayer(phill);
        Board.setPlayingPlayer(phill);
        
    });
    

    $(window).keyup(function(ev){
        switch(ev.keyCode){
            case 37: Board.turnRight(); break;
            case 38: Board.disable3d(); break;
            case 39: Board.turnLeft(); break;
            case 40: Board.enable3d(); break;
            case 48: Board.zoomDefault(); break;
            case 187: Board.zoomIn(); break;
            case 189: Board.zoomOut(); break;
        }
    });

    $(window).resize(function(){
        Board.resize();
    });
    
    
    $("#roll-dice").click(function(){
        Board.rollDice();
    });
    
    
    // dirty slide navigation
    
    var slideStack = ["main"];
    
    $("[data-slide]").click(function(){
        var slide = $(this).data("slide");
        
        if( slide == "_back" ){
            slideStack.pop();
            slide = slideStack[slideStack.length - 1];
        }else{
            slideStack.push(slide);
        }
        
        console.log(slide, $(this));
        
        $("#sidebar .slide.active").removeClass("active");
        $("[data-slide-id=" + slide + "]").addClass("active");
        
        
    });
    
    window.b = Board;
    
});