class Game {

    constructor() {
        this.frameCount = 12;
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
            this.checkCollisions();
            this.updateScreen();
            this.canPlay && this.adjustSpeed();
        }
    }

    checkCollisions() {
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
        this.changeBodyBackGroundImage('bg_broken_nokia.jpg')
        document.querySelector('span#game-over').innerText = 'GAME OVER!';
    }

    increaseScore() {
        this.score++;
    }

    adjustSpeed() {
        if (this.score < 15) {
            this.frameCount = 12;
            this.changeBodyBackGroundImage('bg_snake_logo.png')
        }
        if (this.score >= 15) {
            this.frameCount = 10;
            this.changeBodyBackGroundImage('bg_nokia.jpg')
        }
        if (this.score >= 25) {
            this.frameCount = 8;
            this.changeBodyBackGroundImage('bg_snake_logo.png')
        }
        if (this.score >= 35) {
            this.frameCount = 6;
            this.changeBodyBackGroundImage('bg_nokia.jpg')
        }
        if (this.score >= 45) {
            this.frameCount = 4;
            this.changeBodyBackGroundImage('bg_snake_logo.png')
        }
    }

    changeBodyBackGroundImage(img) {
        document.body.style.backgroundImage = `url(/assets/${img})`;
    }
}