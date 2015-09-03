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
    
    window.b = Board;
});