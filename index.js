export const vec = (x, y) => ({
  x,
  y,
  xy: [x, y],
  add: (a, b) => vec(x + a, y + (b ?? a)),
  subtract: (a, b) => vec(x - a, y - (b ?? a)),
  multiply: (a, b) => vec(x * a, y * (b ?? a)),
  divide: (a, b) => vec(x / a, y / (b ?? a)),
  length: () => Math.hypot(x, y),
  distance: (a, b) => Math.hypot(x - a, y - b),
  dot: (a, b) => x * a + y * b,
  normalize: () => vec(x, y).divide(Math.hypot(x, y)),
  normal: () => vec(-y, x),
  angle: (a, b) =>
    Math.acos((x * a + y * b) / (Math.hypot(x, y) * Math.hypot(a, b))),
  rotate: (angle) =>
    vec(
      x * Math.cos(angle) - y * Math.sin(angle),
      x * Math.sin(angle) + y * Math.cos(angle)
    ),
})

export default vec
