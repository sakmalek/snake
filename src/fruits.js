class Fruits {

    constructor() {
        this.x = 50;
        this.y = 50;
    }

    draw() {
        stroke('black')
        this.genFruit();

    }

    setPosition() {
        this.x = Math.floor((Math.random() * WIDTH) / UNIT) * UNIT;
        this.y = Math.floor((Math.random() * HEIGHT) / UNIT) * UNIT;

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