import type { QualityTier } from '../store/useStore'

export interface QualitySettings {
  particleGridSize: number
  dpr: [number, number]
  bloom: boolean
}

export const QUALITY_PRESETS: Record<QualityTier, QualitySettings> = {
  high: {
    particleGridSize: 128,
    dpr: [1, 2],
    bloom: true,
  },
  mid: {
    particleGridSize: 96,
    dpr: [1, 1.5],
    bloom: true,
  },
  low: {
    particleGridSize: 56,
    dpr: [1, 1],
    bloom: false,
  },
}

/** Heuristic initial tier guess from device signals, refined at runtime by FPS watchdog. */
export function detectInitialTier(): QualityTier {
  if (typeof navigator === 'undefined') return 'mid'

  const mem = (navigator as unknown as { deviceMemory?: number }).deviceMemory ?? 8
  const cores = navigator.hardwareConcurrency ?? 4
  const isCoarsePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  let score = 0
  score += mem >= 8 ? 2 : mem >= 4 ? 1 : 0
  score += cores >= 8 ? 2 : cores >= 4 ? 1 : 0
  score -= isCoarsePointer ? 1 : 0

  if (score >= 4) return 'high'
  if (score >= 1) return 'mid'
  return 'low'
}

/**
 * Rolling FPS watchdog. Call tick(dt) every frame; it returns a downgrade
 * suggestion if sustained frame time indicates we're missing 60fps budget.
 */
export class FpsWatchdog {
  private samples: number[] = []
  private readonly windowSize = 90

  tick(deltaSeconds: number): number {
    const fps = 1 / Math.max(deltaSeconds, 1e-6)
    this.samples.push(fps)
    if (this.samples.length > this.windowSize) this.samples.shift()
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length
    return avg
  }

  shouldDowngrade(): boolean {
    if (this.samples.length < this.windowSize) return false
    const avg = this.samples.reduce((a, b) => a + b, 0) / this.samples.length
    return avg < 45
  }
}

export function downgrade(tier: QualityTier): QualityTier {
  if (tier === 'high') return 'mid'
  if (tier === 'mid') return 'low'
  return 'low'
}
