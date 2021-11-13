# Tiny Vec

A super tiny (0.25kb gzip) 2d vector library.

## Install

```
npm i tiny-vec
```

## Examples

```js
import vec from "tiny-vec"

const a = vec(10, 20)
const b = vec(50, 30).add(20)
console.log(a.distance(b))
```

```js
const myVec = vec(100, 0)
const angle = vec(43, 20).angle(...myVec.xy) // See: Caveats
```

## Operations and Methods

```js
const myVec = vec(x: number, y: number)

// Operations
myVec.add(a: number, b?: number) => vec
myVec.subtract(a: number, b?: number) => vec
myVec.multiply(a: number, b?: number) => vec
myVec.divide(a: number, b?: number) => vec
myVec.rotate(angle: number) => vec // angle in radians
myVec.normal() => vec
myVec.normalize() => vec

// Methods
myVec.length() => number
myVec.distance(a: number, b: number) => number
myVec.dot(a: number, b: number) => number
myVec.angle(a: number, b: number) => number // angle in radians

// You can chain multiple operations together:
vec(10, 20).add(40, 5).multiply(2)
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
