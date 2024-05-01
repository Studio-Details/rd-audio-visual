varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform float uProgress;
uniform float uFreqArray[128];
uniform vec2 uPixels;

#pragma glslify: fitCover = require(./utils/fitCover.glsl)

float PI = 3.1415926535897932384626433832795;

void main() {
  vec2 uv = vUv;
  uv = fitCover(uv, vec2(1.0), uPixels);
  uv -= 0.5;
  float r = 0.008;
  float t0 = 0.0;
  float t1 = 0.0;
  float t2 = 0.0;
  for(int i = 0; i < 64; i += 3) {
    t0 += r / abs(uFreqArray[i] - length(uv));
    t1 += r / abs(uFreqArray[i + 1] - length(uv));
    t2 += r / abs(uFreqArray[i + 2] - length(uv));
  }

  for(int i = 64; i < 128; i += 3) {
    t0 -= abs(uFreqArray[i] - length(uv));
    t1 -= abs(uFreqArray[i + 1] - length(uv));
    t2 -= abs(uFreqArray[i + 2] - length(uv));
  }
  gl_FragColor = vec4(vec3(t0, t1, t2), 1.0);
}
