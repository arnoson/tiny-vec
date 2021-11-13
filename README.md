# Tiny Vec

A super tiny (0.3kb gzip) 2d vector library.

## Install

```
npm i tiny-vec
```

## Examples

```js
import vec from "tiny-vec"

const a = vec(10, 20)
const b = vec(15, 3).multiply(2)
console.log(a.distance(b))
```

## Documentation

```js
myVec = vec(x: number, y: number)
// or
myVec = vec({ x: number, y: number })

// Operations
myVec.add({ x: number, y: number }) => vec
myVec.subtract({ x: number, y: number }) => vec
myVec.multiply(multiplier: number) => vec
myVec.divide(divisor: number) => vec
myVec.rotate(angle: number) => vec // angle in radians
myVec.normal() => vec
myVec.normalize() => vec

// You can chain multiple operations together:
vec({ x: 10, y: 20 }).normal().multiply(2)

// Methods
myVec.length() => number
myVec.distance({ x: number, y: number }) => number
myVec.dot({ x: number, y: number }) => number
myVec.angle({ x: number, y: number }) => number // angle in radians

// Properties
myVec.x: number
myVec.y: number
```

## Caveats

To keep things simple and the implementation tiny you can't use another `vec()` as an input to any of the operations.

```js
const myVec = vec(3, 4)

// This won't work!
vec(10, 20).add(myVec)

// Use this instead
vec(10, 20).add(myVec.x, myVec.y)

// Or this, if you are feeling fancy
vec(10, 20).add(...myVec.xy)
```
