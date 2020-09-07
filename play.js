function startGame() {
    myGameArea.start()
}

var myGameArea = {
    canvas : document.getElementsByClassName("win"),
    start: function() {
        this.canvas.width = 1024;
        this.canvas.height = 756;
        this.context = this.canvas.getContext("2d")
        document.body.innerHTML = "start"
        document.body.insertBefore(this.canvas)
    }
}
