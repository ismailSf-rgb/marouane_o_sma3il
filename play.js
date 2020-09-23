
function startGame() {
    myGameArea.start()
}

var myGameArea = {
    canvas : document.getElementById("play"),
    start: function() {
        this.ctx = this.canvas.getContext("2d")
        this.ctx.fillRect(25, 25, 100, 10);
    }
}

startGame()