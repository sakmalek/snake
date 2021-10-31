class Snake {
    constructor() {
        this.direction = DIRECTION.RIGHT;
        this.snakeUnits = [
            {'x': 10, 'y': 100},
            {'x': 20, 'y': 100},
            {'x': 30, 'y': 100},
        ]
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
        // draw
        for (let i = lastIndex; i >= 0; i--) {

            if (i === lastIndex) {
                fill('grey');
                rect(this.snakeUnits[i].x, this.snakeUnits[i].y, UNIT - 2, UNIT - 2);

            } else {
                fill('black');
                rect(this.snakeUnits[i].x, this.snakeUnits[i].y, UNIT - 2, UNIT - 2);

            }

        }
        // go through the wall is enabled
        if (this.snakeUnits[lastIndex].x > WIDTH) this.snakeUnits[lastIndex].x = 0;
        if (this.snakeUnits[lastIndex].x < 0) this.snakeUnits[lastIndex].x = WIDTH;
        if (this.snakeUnits[lastIndex].y > HEIGHT) this.snakeUnits[lastIndex].y = 0;
        if (this.snakeUnits[lastIndex].y < 0) this.snakeUnits[lastIndex].y = HEIGHT;
    }

    grow() {
        const obj = this.snakeUnits[0]
        this.snakeUnits.unshift({'x': obj.x, 'y': obj.y})
    }

    moveUp() {
        this.direction = DIRECTION.UP;
    }

    moveDown() {
        this.direction = DIRECTION.DOWN;
    }

    moveRight() {
        this.direction = DIRECTION.RIGHT;
    }

    moveLeft() {
        this.direction = DIRECTION.LEFT;
    }
}

