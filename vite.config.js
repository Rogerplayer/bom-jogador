import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages de projeto serve a partir de /<repo>/, não da raiz — mas só
  // no build de produção; o dev local continua em localhost:5173/.
  base: command === 'build' ? '/bom-jogador/' : '/',
}))
