class Shape {
  constructor(name, colour) {
    this.name = name;
    this.colour = colour;
  }
  describe() {
    console.log("this is basic shape");
  }
  static compare(a, b) {
    return a.area() > b.area() ? a : b;
  }
}

class Circle extends Shape {
  constructor(name, colour, radius) {
    super(name, colour);
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  describe() {
    console.log("this is a circle with radius " + this.radius);
  }
}

class Rectangle extends Shape {
  constructor(name, colour, width, height) {
    super(name, colour);
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  describe() {
    console.log(
      "this is a rectangle with width " +
        this.width +
        " and height " +
        this.height,
    );
  }
}

class Triangle extends Shape {
  constructor(name, colour, base, height) {
    super(name, colour);
    this.base = base;
    this.height = height;
  }
  area() {
    return (1 / 2) * this.base * this.height;
  }
  describe() {
    console.log(
      "This is a triangle with base " +
        this.base +
        " and height " +
        this.height,
    );
  }
}
const triangle = new Triangle("t1", "red", 10, 10);
triangle.describe();
triangle.area();
const rectangle = new Rectangle("r1", "red", 30, 20);
rectangle.describe();
rectangle.area();
const circle = new Circle("c1", "red", 5);
circle.describe();
circle.area();
const circle2 = new Circle("c2", "red", 10);
circle.describe();
circle.area();
console.log(Shape.compare(circle, circle2));

class ShapeCollection {
  collections = [];
  display() {
    console.log(this.collections);
  }
  add(shape) {
    this.collections.push(shape);
  }
  getById(id) {
    for (let collection of this.collections) {
      //name is the id
      if (collection.name === id) return collection;
    }
  }
  getByType(type) {
    for (let collection of this.collections) {
      if (collection.constructor.name === type) return collection;
    }
  }
  getTotalArea() {
    let totalArea = 0;
    this.collections.forEach((collection) => {
      totalArea = totalArea + collection.area();
    });

    return totalArea;
  }
  sortByArea() {
    this.collections.sort(Shape.compare);
  }
  removeById(id) {
    let obj = this.getById(id);
    let index = this.collections.indexOf(obj);
    this.collections.splice(index, 1);
  }
}
shapeCollection = new ShapeCollection();
shapeCollection.add(rectangle);
shapeCollection.add(triangle);
shapeCollection.display();
console.log(shapeCollection.getById("r1"));
console.log(shapeCollection.getTotalArea());
shapeCollection.removeById("r1");
shapeCollection.display();
shapeCollection.add(rectangle);
shapeCollection.add(circle);
shapeCollection.sortByArea();
shapeCollection.display();
console.log(shapeCollection.getByType("Circle"));
//verfiying instanceof getprototypeof and constructor.name
console.log(circle instanceof Shape);
console.log(Object.getPrototypeOf(rectangle));
console.log(circle.constructor.name);
