// #include /constants/GAMMA_FACTOR;

vec4 LinearToGamma4(vec4 color) {
  return vec4(pow(color.rgb, vec3(1.0 / GAMMA_FACTOR)), color.w);
}
