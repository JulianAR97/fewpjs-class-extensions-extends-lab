// Your code here
class Polygon {
  constructor(sides) {
    this.sides = sides
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((a, b) => a + b)
  }
}

class Triangle extends Polygon {
  get isValid() {
    let [a, b, c] = this.sides;
    if (a + b > c && b + c > a && a + c > b) {
      return true
    }
    return false
  }
}

class Square extends Polygon {
  get isValid() {
    let [a, b, c, d] = this.sides;
    if (a == b && b == c && c == d) {
      return true
    }
    return false
  }

  get area() {
    return Math.pow(this.sides[0], 2)
  }
}