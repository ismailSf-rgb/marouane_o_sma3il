function startGame() {
    myGameArea.start()
}

var myGameArea = {
    canvas : document.getElementsById("game"),
    start: function() {
        this.context = this.canvas.getContext("2d")
        
    }
}
