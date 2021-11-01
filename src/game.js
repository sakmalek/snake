class Game {

    constructor() {
        this.frameCount = 12;
        this.canPlay = true;
        this.isGameOver = false;
        this.score = 0;
    }

    setup() {
        this.snake = new Snake();
        this.fruit = new Fruits(this.snake);
    }

    draw() {
        if (frameCount % this.frameCount === 0 && this.canPlay && !this.isGameOver) {
            clear();
            this.snake.draw();
            this.fruit.draw();
            this.checkCollisions();
            this.updateScreen();
            this.canPlay && this.adjustSpeed();
        }
    }

    checkCollisions() {
        this.collisionWithFruit();
        this.selfCollision();
    }

    collisionWithFruit() {
        const lastIndex = this.snake.snakeUnits.length - 1;
        if (this.snake.snakeUnits[lastIndex].x === this.fruit.x && this.snake.snakeUnits[lastIndex].y === this.fruit.y) {
            this.snake.grow();
            this.fruit.setPosition();
            this.increaseScore();
        }
    }

    selfCollision() {
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
        this.isGameOver = true;
        this.changeBodyBackGroundImage('bg_broken_nokia.jpg', "100px")
        document.querySelector('span#game-over').innerText = 'GAME OVER!';
        document.querySelector('span#restart').innerText = 'Press tab to restart';
    }

    increaseScore() {
        this.score++;
    }

    adjustSpeed() {
        if (this.score < 15) {
            this.frameCount = 12;
            this.changeBodyBackGroundImage('bg_snake_logo.png', "150px")
        }
        if (this.score >= 15) {
            this.frameCount = 10;
            this.changeBodyBackGroundImage('bg_snake_logo.png', "100px")
        }
        if (this.score >= 25) {
            this.frameCount = 8;
            this.changeBodyBackGroundImage('bg_snake_logo.png', "50px")
        }
        if (this.score >= 35) {
            this.frameCount = 6;
            this.changeBodyBackGroundImage('bg_nokia.jpg', "100px")
        }
        if (this.score >= 45) {
            this.frameCount = 4;
            this.changeBodyBackGroundImage('bg_nokia.jpg', "50px")
        }
    }

    changeBodyBackGroundImage(img, size) {
        document.body.style.backgroundSize = size;
        document.body.style.backgroundImage = `url(/assets/${img})`;
    }

    resetSetting() {
        document.querySelector('span#game-over').innerText = '';
        document.querySelector('span#restart').innerText = '(tab) stop/resume';
        this.snake.snakeUnits = [...DEFAULT_SNAKE_UNIT];
        this.score = 0;
        this.isGameOver = false;
    }
}