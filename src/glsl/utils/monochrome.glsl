#define R_LUMINANCE 0.298912
#define G_LUMINANCE 0.586611
#define B_LUMINANCE 0.114478

const vec3 MONOCHROME_SCALE = vec3(R_LUMINANCE, G_LUMINANCE, B_LUMINANCE);

vec3 monochrome(vec3 color) {
  return vec3(dot(color, MONOCHROME_SCALE));
}
