// #include /constants/GAMMA_FACTOR;

vec3 GammaToLinear(vec3 color) {
  return pow(color.rgb, vec3(GAMMA_FACTOR));
}
