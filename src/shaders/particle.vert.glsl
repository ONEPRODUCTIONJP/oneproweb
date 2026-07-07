uniform sampler2D texturePosition;
uniform float uSize;
uniform float uHue;
uniform float uPixelRatio;

attribute vec2 aUv;
attribute float aRandom;

varying float vRandom;
varying vec3 vColor;
varying float vDist;

vec3 hsl2rgb(vec3 c) {
  vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, 0.0, 1.0);
  return c.z + c.y * (rgb - 0.5) * (1.0 - abs(2.0 * c.z - 1.0));
}

void main() {
  vec4 posData = texture2D(texturePosition, aUv);
  vec3 transformed = posData.xyz;

  vRandom = aRandom;

  float hue = fract(uHue + transformed.y * 0.03 + aRandom * 0.06);
  vColor = hsl2rgb(vec3(hue, 0.85, 0.58));

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
  vDist = -mvPosition.z;
  gl_Position = projectionMatrix * mvPosition;

  float size = uSize * (0.6 + aRandom * 0.8);
  gl_PointSize = size * uPixelRatio * (300.0 / -mvPosition.z);
}
