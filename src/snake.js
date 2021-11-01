class Snake {
    constructor() {
        this.direction = DIRECTION.RIGHT;
        this.snakeUnits = [...DEFAULT_SNAKE_UNIT];
    }

    draw() {
        const lastIndex = this.snakeUnits.length - 1;
        // coords in i should take those of i+1
        for (let i = 0; i < lastIndex; i++) {
            this.snakeUnits[i].x = this.snakeUnits[i + 1].x;
            this.snakeUnits[i].y = this.snakeUnits[i + 1].y;
        }
        // add one unit depending on the chosen direction
        switch (this.direction) {
            case DIRECTION.UP:
                this.snakeUnits[lastIndex].y -= UNIT;
                break;
            case DIRECTION.DOWN:
                this.snakeUnits[lastIndex].y += UNIT;
                break;
            case DIRECTION.RIGHT:
                this.snakeUnits[lastIndex].x += UNIT
                break;
            case DIRECTION.LEFT:
                this.snakeUnits[lastIndex].x -= UNIT;
                break;
        }
        // go through the wall is enabled // TOBE IMPROVED!!
        if (this.snakeUnits[lastIndex].x >= WIDTH) this.snakeUnits[lastIndex].x = 0;
        if (this.snakeUnits[lastIndex].x < 0) this.snakeUnits[lastIndex].x = WIDTH;
        if (this.snakeUnits[lastIndex].y >= HEIGHT) this.snakeUnits[lastIndex].y = 0;
        if (this.snakeUnits[lastIndex].y < 0) this.snakeUnits[lastIndex].y = HEIGHT;
        // draw
        for (let i = lastIndex; i >= 0; i--) {
            if (i === lastIndex) {
                this.genSnakeUnit(i, true, false);
            } else if (i === 0) {
                this.genSnakeUnit(i, false, true);
            } else {
                this.genSnakeUnit(i, false, false);
            }
        }
    }

    grow() {
        const obj = this.snakeUnits[0]
        this.snakeUnits.unshift({'x': obj.x, 'y': obj.y})
    }

    moveUp() {
        if (!(this.direction === DIRECTION.DOWN)) this.direction = DIRECTION.UP;
    }

    moveDown() {
        if (!(this.direction === DIRECTION.UP)) this.direction = DIRECTION.DOWN;
    }

    moveRight() {
        if (!(this.direction === DIRECTION.LEFT)) this.direction = DIRECTION.RIGHT;
    }

    moveLeft() {
        if (!(this.direction === DIRECTION.RIGHT)) this.direction = DIRECTION.LEFT;
    }

    genSnakeUnit(i, isHead, isTail) {
        const pixelSize = 1;
        stroke(60);
        rect(this.snakeUnits[i].x, this.snakeUnits[i].y, pixelSize, pixelSize);
        isTail || rect(this.snakeUnits[i].x, this.snakeUnits[i].y + 3, pixelSize, pixelSize);
        rect(this.snakeUnits[i].x + 3, this.snakeUnits[i].y, pixelSize, pixelSize);
        isHead || rect(this.snakeUnits[i].x + 3, this.snakeUnits[i].y + 3, pixelSize, pixelSize);
    }
}

