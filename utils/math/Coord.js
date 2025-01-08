

export class coord2D {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

export class coord3D extends coord2D{
    z;
    constructor(x, y, z) {
        super(x, y);
    }
}
