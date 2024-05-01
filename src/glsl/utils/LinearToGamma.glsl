// #include /constants/GAMMA_FACTOR;

vec3 LinearToGamma(vec3 color) {
  return pow(color.rgb, vec3(1.0 / GAMMA_FACTOR));
}
