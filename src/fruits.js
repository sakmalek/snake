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

        this.x = x;
        this.y = y;

    }

    genFruit() {
        rect(this.x, this.y, 1, 1)
        rect(this.x + 3, this.y, 1, 1)
        rect(this.x + 6, this.y, 1, 1)
        rect(this.x, this.y + 3, 1, 1)
        rect(this.x + 3, this.y + 3, 1, 1)
        rect(this.x - 3, this.y + 3, 1, 1)
    }
}