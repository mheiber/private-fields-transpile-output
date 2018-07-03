class Circle {
    #diameter: number;

    constructor (diameter) {
        this.#diameter = diameter;
    }
    get #radius () {
        return this.#diameter / 2;
    }
    set #radius(radius) {
        this.#diameter = radius * 2;
    }
    get area () {
        return Math.PI * this.#radius ** 2;
    }
}
