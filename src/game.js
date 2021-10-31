class Game {

    constructor() {
        this.frameCount = 10;
        this.canPlay = true;
        this.score = 0;
    }

    setup() {
        this.snake = new Snake();
        this.fruit = new Fruits();
    }

    draw() {
        if (frameCount % this.frameCount === 0 && this.canPlay) {
            clear();
            this.snake.draw();
            if (this.collision()) this.fruit.draw();
            this.updateScreen()
        }
    }

    collision() {
        const lastIndex = game.snake.snakeUnits.length - 1;
        if (game.snake.snakeUnits[lastIndex].x === game.fruit.x && game.snake.snakeUnits[lastIndex].y === game.fruit.y) {
            this.snake.grow();
            this.score++
            return true
        }
    }

    updateScreen() {
        document.querySelector('span#score').innerText = this.score;
    }
}