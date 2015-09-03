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
    
    Board.render();
    
    $(window).keyup(function(ev){
        // 37 left, 39 right
        
        switch(ev.keyCode){
            case 37: Board.turnRight(); break;
            case 39: Board.turnLeft(); break;
        }
    });
});