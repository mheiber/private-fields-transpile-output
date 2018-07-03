class MyClass {
  #property1: number = 1;
  #property2: number;
  constructor (property2: number) {
    
    this.#property2 = property2;
  }
  method() {
    this.#property1 = 1;
    return this.#property2;
  }
}
