/**
 * Procedural point-cloud target generators for the GPGPU hero mark.
 * The resting shape is a torus-knot "ribbon" -- an abstract echo of the
 * ONE PRODUCTION swirl mark (public/logo.png) rendered as flowing particles
 * rather than a literal logo trace, kept fully procedural so there are no
 * binary 3D assets to ship.
 */

function rand(seed: { s: number }) {
  seed.s |= 0
  seed.s = (seed.s + 0x6d2b79f5) | 0
  let t = Math.imul(seed.s ^ (seed.s >>> 15), 1 | seed.s)
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

/** Torus-knot ribbon sampled with tube-radius jitter for volume. */
export function generateMarkTarget(count: number): Float32Array {
  const out = new Float32Array(count * 3)
  const seed = { s: 7331 }

  const p = 2
  const q = 3
  const R = 1.6
  const r = 0.55
  const tube = 0.16

  for (let i = 0; i < count; i++) {
    const t = rand(seed) * Math.PI * 2
    const cx = (R + r * Math.cos(q * t)) * Math.cos(p * t)
    const cy = (R + r * Math.cos(q * t)) * Math.sin(p * t)
    const cz = r * Math.sin(q * t)

    // small random offset around the curve point for a soft tube of particles
    const jitterR = tube * Math.sqrt(rand(seed))
    const jitterTheta = rand(seed) * Math.PI * 2
    const jx = Math.cos(jitterTheta) * jitterR
    const jy = Math.sin(jitterTheta) * jitterR

    out[i * 3] = cx + jx
    out[i * 3 + 1] = cy + jy * 0.6
    out[i * 3 + 2] = cz + jy * 0.6
  }
  return out
}

/** Loose spherical scatter used as the pre-formation resting state. */
export function generateCloudTarget(count: number): Float32Array {
  const out = new Float32Array(count * 3)
  const seed = { s: 99 }
  for (let i = 0; i < count; i++) {
    const radius = 3 + rand(seed) * 5
    const theta = rand(seed) * Math.PI * 2
    const phi = Math.acos(2 * rand(seed) - 1)
    out[i * 3] = Math.sin(phi) * Math.cos(theta) * radius
    out[i * 3 + 1] = Math.cos(phi) * radius
    out[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius
  }
  return out
}
