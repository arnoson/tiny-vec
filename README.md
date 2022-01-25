# Tiny Vec

A super tiny (0.3kb gzip) 2d vector library.

## Install

```
npm i tiny-vec
```

## Examples

```js
import ec from "tiny-vec"

const a = new Vec(10, 20)
const b = new Vec(15, 3).multiply(2)
console.log(a.distance(b))
```

## Documentation

```js
type Point = { x: number; y: number }

class Vec {
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
  angle(point: Point): number // angle in radians
  rotate(angle: number): Vec // angle in radians
}

// Create a new `Vec`
const vec = new Vec(10, 20) // or `new Vec({ x: 10, y: 20 })`

// You can easily chain multiple operations together.
vec.normal().multiply(2).add({ x: 1, y: 2 })

// `Vec`s are immutable, they return a new `Vec` for each operation.
const a = new Vec({ x: 10, y: 20 })
const b = a.add({ x: 5, y: 5 })
// b.x = 15, b.y = 25
// a.x = 10, a.y = 20
```
