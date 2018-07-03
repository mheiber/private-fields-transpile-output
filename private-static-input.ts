// private static input
class A {
    static #foo: number = 1;

    static bar () {
        return this.#foo; 
    }
}

