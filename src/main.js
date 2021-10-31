let game = new Game();

function preload() {

}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    drawCanvas();
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
    }
}

function drawCanvas() {
    for (let x = 0; x <= WIDTH; x = x + UNIT) {
        for (let y = 0; y <= HEIGHT; y = y + UNIT) {
            rect(x, y, 1, 1);
            fill('#222222');
        }
        stroke(80)
    }
}