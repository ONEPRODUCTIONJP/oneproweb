import * as THREE from 'three'

/**
 * Mutable, non-reactive ambient state for the hero particle mark.
 * Kept outside React state since it's written/read every render frame.
 */
export const director = {
  flow: 0.35, // curl noise drift strength (idle organic motion)
  spring: 1.6, // spring-to-target stiffness
  hue: 0.42, // base hue (green), nudged slightly by mouse position
  camPos: new THREE.Vector3(0, 0, 7),
  camLook: new THREE.Vector3(0, 0, 0),
}
