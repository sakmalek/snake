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
            this.fruit.draw();
            this.collisions();
            this.updateScreen();
        }
    }

    collisions() {
        this.isCollisionWithFruit();
        this.isSelfCollision();
    }

    isCollisionWithFruit() {
        const lastIndex = this.snake.snakeUnits.length - 1;
        if (this.snake.snakeUnits[lastIndex].x === this.fruit.x && this.snake.snakeUnits[lastIndex].y === this.fruit.y) {
            this.snake.grow();
            this.fruit.setPosition()
            this.increaseScore();
        }
    }

    isSelfCollision() {
        const lastIndex = this.snake.snakeUnits.length - 1;
        const CollisionArr = this.snake.snakeUnits.filter(obj =>
            obj.x === this.snake.snakeUnits[lastIndex].x && obj.y === this.snake.snakeUnits[lastIndex].y);
        if (CollisionArr.length > 1) {
            this.gameOver();
        }
    }

    updateScreen() {
        document.querySelector('span#score').innerText = this.score;
    }

    gameOver() {
        this.canPlay = false;
        this.updateScreen();
    }

    increaseScore() {
        this.score++;
    }
}