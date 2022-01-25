export type Point = { x: number; y: number }

declare class Vec {
  constructor(a: number | Point, b?: number)
  x: number
  y: number
  add(numberOrPoint: number | Point): Vec
  subtract(numberOrPoint: number | Point): Vec
  multiply(numberOrPoint: number | Point): Vec
  divide(numberOrPoint: number | Point): Vec
  distance(point: Point): number
  length(): number
  dot(point: Point): number
  normal(): Vec
  normalize(): Vec
  angle(point: Point): number
  rotate(angle: number): Vec
}

export default Vec
