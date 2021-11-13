import vec from "./index.js"

describe("vec", () => {
  test("add", () => {
    expect(vec(15, 30).add(-20, 15)).toMatchObject({ x: -5, y: 45 })
    expect(vec(15, 30).add(10)).toMatchObject({ x: 25, y: 40 })
  })

  test("subtract", () => {
    expect(vec(10, 20).subtract(5, 100)).toMatchObject({ x: 5, y: -80 })
    expect(vec(10, 20).subtract(10)).toMatchObject({ x: 0, y: 10 })
  })

  test("multiply", () => {
    expect(vec(10, 20).multiply(2, 3)).toMatchObject({ x: 20, y: 60 })
    expect(vec(10, 20).multiply(5)).toMatchObject({ x: 50, y: 100 })
  })

  test("divide", () => {
    expect(vec(10, 20).divide(5, 4)).toMatchObject({ x: 2, y: 5 })
    expect(vec(10, 20).divide(2)).toMatchObject({ x: 5, y: 10 })
  })

  test("length", () => expect(vec(20, 20).length()).toBe(28.284271247461902))

  test("distance", () =>
    expect(vec(20, 20).distance(40, 40)).toBe(28.284271247461902))

  test("dot", () => expect(vec(-6, 8).dot(5, 12)).toBe(66))

  test("normalize", () =>
    expect(vec(3, 4).normalize()).toMatchObject({ x: 0.6, y: 0.8 }))

  test("normal", () =>
    expect(vec(3, 4).normal()).toMatchObject({ x: -4, y: 3 }))

  test("angle", () => expect(vec(20, 20).angle(1, 0)).toBe(0.7853981633974484))

  test("rotate", () =>
    expect(vec(50, 100).rotate(Math.PI)).toMatchObject({
      x: -50.000000000000014,
      y: -100,
    }))
})
