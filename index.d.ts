export interface Vec {
  x: number
  y: number
  add: (other: { x: number; y: number }) => Vec
  subtract: (other: { x: number; y: number }) => Vec
  multiply: (multiplier: number) => Vec
  divide: (divisor: number) => Vec
  distance: (other: { x: number; y: number }) => number
  length: () => number
  dot: (other: { x: number; y: number }) => number
  normal: () => Vec
  normalize: () => Vec
  angle: (other: { x: number; y: number }) => number
  rotate: (angle: number) => Vec
}

declare const vec: (a: { x: number; y: number } | number, y?: number) => Vec

export default vec
