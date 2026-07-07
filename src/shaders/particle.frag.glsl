varying float vRandom;
varying vec3 vColor;
varying float vDist;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  if (d > 0.5) discard;

  float core = smoothstep(0.5, 0.0, d);
  float rim = smoothstep(0.5, 0.35, d) - smoothstep(0.35, 0.0, d);

  vec3 juicy = mix(vColor, vec3(1.0), rim * 0.5);
  float fog = clamp(1.0 - vDist / 40.0, 0.35, 1.0);

  float alpha = core * fog;
  gl_FragColor = vec4(juicy, alpha);
}
