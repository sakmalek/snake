class Fruits {

    constructor(snake) {
        this.x = 50;
        this.y = 50;
        this.snake = snake;
    }

    draw() {
        stroke('black')
        this.genFruit();
    }

    setPosition() {
        const x = Math.floor((Math.random() * WIDTH) / UNIT) * UNIT;
        const y = Math.floor((Math.random() * HEIGHT) / UNIT) * UNIT;
        if (this.snake.snakeUnits.filter(unit => unit.x === x && unit.y === y).length > 0) {
            this.setPosition();
        } else {
            this.x = x;
            this.y = y;
        }
    }

    genFruit() {
        const pixelSize = 1;
        rect(this.x, this.y, pixelSize, pixelSize)
        rect(this.x + 3, this.y, pixelSize, pixelSize)
        rect(this.x + 6, this.y, pixelSize, pixelSize)
        rect(this.x, this.y + 3, pixelSize, pixelSize)
        rect(this.x + 3, this.y + 3, pixelSize, pixelSize)
        rect(this.x - 3, this.y + 3, pixelSize, pixelSize)
    }
}