class Fruits {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    draw() {
        fill('blue')
        rect(this.x, this.y, UNIT - 2, UNIT - 2);
    }

    setPosition() {
        this.x = Math.floor((Math.random() * WIDTH) / UNIT) * UNIT;
        this.y = Math.floor((Math.random() * HEIGHT) / UNIT) * UNIT;
    }
}