import Vec from "./index.js"

describe("vec", () => {
  test("add", () => {
    expect(new Vec(15, 30).add({ x: -20, y: 15 })).toMatchObject({
      x: -5,
      y: 45,
    })
    expect(new Vec(15, 30).add(10)).toMatchObject({
      x: 25,
      y: 40,
    })
  })

  test("subtract", () => {
    expect(new Vec(10, 20).subtract({ x: 5, y: 100 })).toMatchObject({
      x: 5,
      y: -80,
    })
    expect(new Vec(10, 20).subtract(100)).toMatchObject({
      x: -90,
      y: -80,
    })
  })

  test("multiply", () => {
    expect(new Vec(10, 20).multiply({ x: 2, y: 3 })).toMatchObject({
      x: 20,
      y: 60,
    })
    expect(new Vec(10, 20).multiply(2)).toMatchObject({ x: 20, y: 40 })
  })

  test("divide", () => {
    expect(new Vec(10, 20).divide({ x: 2, y: 4 })).toMatchObject({ x: 5, y: 5 })
    expect(new Vec(10, 20).divide(2)).toMatchObject({ x: 5, y: 10 })
  })

  test("length", () =>
    expect(new Vec(20, 20).length()).toBe(28.284271247461902))

  test("distance", () =>
    expect(new Vec(20, 20).distance({ x: 40, y: 40 })).toBe(28.284271247461902))

  test("dot", () => expect(new Vec(-6, 8).dot({ x: 5, y: 12 })).toBe(66))

  test("normalize", () =>
    expect(new Vec(3, 4).normalize()).toMatchObject({ x: 0.6, y: 0.8 }))

  test("normal", () =>
    expect(new Vec(3, 4).normal()).toMatchObject({ x: -4, y: 3 }))

  test("angle", () =>
    expect(new Vec(20, 20).angle({ x: 1, y: 0 })).toBe(0.7853981633974484))

  test("rotate", () =>
    expect(new Vec(50, 100).rotate(Math.PI)).toMatchObject({
      x: -50.000000000000014,
      y: -100,
    }))
})
