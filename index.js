export default function vec(a, b) {
  const x = a.x ?? a
  const y = a.y ?? b
  return {
    x,
    y,
    add: other => vec(x + other.x, y + other.y),
    subtract: other => vec(x - other.x, y - other.y),
    multiply: multiplier => vec(x * multiplier, y * multiplier),
    divide: divisor => vec(x / divisor, y / divisor),
    distance: other => Math.hypot(x - other.x, y - other.y),
    length: () => Math.hypot(x, y),
    dot: other => x * other.x + y * other.y,
    normal: () => vec(-y, x),
    normalize: () => vec(x, y).divide(Math.hypot(x, y)),
    angle: other =>
      Math.acos(
        (x * other.x + y * other.y) /
          (Math.hypot(x, y) * Math.hypot(other.x, other.y))
      ),
    rotate: angle =>
      vec(
        x * Math.cos(angle) - y * Math.sin(angle),
        x * Math.sin(angle) + y * Math.cos(angle)
      ),
  }
}
