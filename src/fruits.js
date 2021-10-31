class Fruits {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    draw() {
        rect(this.x, this.y, UNIT - 6, UNIT - 6);
    }
}