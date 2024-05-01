varying vec2 vUv;
varying vec3 vPosition;

uniform vec2 uPixels;
uniform float uTime;

float PI = 3.1415926535897932384626433832795;

void main() {
    vUv = uv;
    vPosition = position;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = vec4(position, 1.0);
}
