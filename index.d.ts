export interface Vec {
  x: number
  y: number
  xy: [number, number]
  add: (a: number, b?: number) => Vec
  subtract: (a: number, b?: number) => Vec
  multiply: (a: number, b?: number) => Vec
  divide: (a: number, b?: number) => Vec
  length: () => number
  distance: (a: number, b: number) => number
  dot: (a: number, b: number) => number
  normalize: () => Vec
  normal: () => Vec
  angle: (a: number, b: number) => number
  rotate: (angle: number) => Vec
}

declare const vec: (x: number, y: number) => Vec

export { vec as default, vec }
