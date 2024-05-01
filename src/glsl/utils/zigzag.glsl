float zigzag(float x) {
  float m = mod(x, 2.);
  return m == 1. ? 1. : fract(x * (step(m, 1.) * 2. - 1.));
}
