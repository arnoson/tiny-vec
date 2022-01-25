const getXY = arg =>
  typeof arg === "number" ? { x: arg, y: arg } : { x: arg.x, y: arg.y }

export default class Vec {
  constructor(a, b) {
    this.x = a.x ?? a
    this.y = a.y ?? b
  }
  add(numberOrPoint) {
    const { x, y } = getXY(numberOrPoint)
    return new Vec(this.x + x, this.y + y)
  }
  subtract(numberOrPoint) {
    const { x, y } = getXY(numberOrPoint)
    return new Vec(this.x - x, this.y - y)
  }
  multiply(numberOrPoint) {
    const { x, y } = getXY(numberOrPoint)
    return new Vec(this.x * x, this.y * y)
  }
  divide(numberOrPoint) {
    const { x, y } = getXY(numberOrPoint)
    return new Vec(this.x / x, this.y / y)
  }
  distance({ x, y }) {
    return Math.hypot(this.x - x, this.y - y)
  }
  length() {
    return Math.hypot(this.x, this.y)
  }
  dot({ x, y }) {
    return this.x * x + this.y * y
  }
  normal() {
    return new Vec(-this.y, this.x)
  }
  normalize() {
    return this.divide(Math.hypot(this.x, this.y))
  }
  angle({ x, y }) {
    return Math.acos(this.dot({ x, y }) / (this.length() * Math.hypot(x, y)))
  }
  rotate(angle) {
    const sin = Math.sin(angle)
    const cos = Math.cos(angle)
    return new Vec(this.x * cos - this.y * sin, this.x * sin + this.y * cos)
  }
}
