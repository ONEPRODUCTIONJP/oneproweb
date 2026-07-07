import { create } from 'zustand'

export type QualityTier = 'high' | 'mid' | 'low'

interface AppState {
  loaded: boolean
  setLoaded: (v: boolean) => void

  quality: QualityTier
  setQuality: (q: QualityTier) => void

  reducedMotion: boolean
  setReducedMotion: (v: boolean) => void

  pointerNDC: { x: number; y: number }
  setPointerNDC: (x: number, y: number) => void

  pointerDown: boolean
  setPointerDown: (v: boolean) => void

  fps: number
  setFps: (v: number) => void
}

export const useStore = create<AppState>((set) => ({
  loaded: false,
  setLoaded: (v) => set({ loaded: v }),

  quality: 'high',
  setQuality: (q) => set({ quality: q }),

  reducedMotion:
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false,
  setReducedMotion: (v) => set({ reducedMotion: v }),

  pointerNDC: { x: 0, y: 0 },
  setPointerNDC: (x, y) => set({ pointerNDC: { x, y } }),

  pointerDown: false,
  setPointerDown: (v) => set({ pointerDown: v }),

  fps: 60,
  setFps: (v) => set({ fps: v }),
}))
