let game = new Game();

function preload() {

}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    if (keyCode === 38) {
        // ARROW UP
        game.snake.moveUp()
    }
    if (keyCode === 40) {
        // ARROW DOWN
        game.snake.moveDown()
    }
    if (keyCode === 39) {
        // ARROW RIGHT
        game.snake.moveRight()
    }
    if (keyCode === 37) {
        // ARROW LEFT
        game.snake.moveLeft()
    }
    if (keyCode === 32) {
        // ARROW LEFT
        game.canPlay = !game.canPlay;
        document.querySelector('span#game-over').innerText = '';
    }
}