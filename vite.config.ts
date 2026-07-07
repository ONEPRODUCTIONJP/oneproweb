import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

export default defineConfig({
  plugins: [react(), glsl()],
  server: {
    port: Number(process.env.PORT) || 5173,
    strictPort: false,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', 'three-stdlib', '@react-three/fiber', '@react-three/postprocessing', 'postprocessing'],
          gsap: ['gsap', 'lenis'],
        },
      },
    },
  },
})
