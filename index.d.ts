export type Point = { x: number; y: number }

declare class Vec {
  constructor(a: Point | number, b?: number)
  x: number
  y: number
  add(other: Point): Vec
  subtract(other: Point): Vec
  multiply(multiplier: number): Vec
  divide(divisor: number): Vec
  distance(other: Point): number
  length(): number
  dot(other: Point): number
  normal(): Vec
  normalize(): Vec
  angle(other: Point): number
  rotate(angle: number): Vec
}

export default Vec
