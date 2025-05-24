//  classes
class NewBike {
  bike: string;
  cc: number;

  constructor(bike: string, cc: number) {
    this.bike = bike;
    this.cc = cc;
  }

  call(): string {
    return `my bike name is ${this.bike} & CC is ${this.cc} `;
  }
}

const model = new NewBike("Boxer", 200);
console.log(model.call());
console.log(model.bike);
console.log(model.cc);

// Access Modifiers => Public, Protected & Private

class Car24 {
  private _model: string;
  public _make: string;
  protected _year: number;

  constructor(model: string, make: string, year: number) {
    this._model = model;
    this._make = make;
    this._year = year;
  }
  public getyear(): number {
    return this._year;
  }

  public getModel(): string {
    return this._model;
  }
}
const YourCar = new Car24("TESLA", "MODEL 10", 2024);
console.log(YourCar.getModel());
console.log(YourCar._make);
console.log(YourCar.getyear());

// Inheritance

class pet {
  constructor(public name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Some Generic Sound..");
  }
}

class Dog extends pet {
  constructor(name: string) {
    super(name);
  }
  makeSound() {
    console.log("Woof! Woof!..");
  }
}

const dog = new Dog("Sheru");
dog.makeSound();

// Abstract

abstract class Shape {
  abstract getArea(): number;
  printArea(): void {
    console.log(`The Area is ${this.getArea()}`);
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}

const rect = new Rectangle(10, 3);
rect.printArea();

// setter and getter

class Circle {
  constructor(private radius: number) {
    this.radius = radius;
  }

  set (value: number) {
    if (value < 0) {
      throw new Error("Radius must be Positive !!");
    }
    this.radius = value;
  }
  get(): number {
    return this.radius;
  }
}

const circle = new Circle(10);
console.log(circle.get());
