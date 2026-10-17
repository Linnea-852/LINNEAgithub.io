import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const root = fileURLToPath(new URL('.', import.meta.url))
const swarmJs = path.join(root, 'src/components/Swarm Cursor.js')
const swarmCss = path.join(root, 'src/components/Swarm Cursor.css')
const swarmJsxId = `\0${path.join(root, 'src/components/Swarm Cursor.jsx')}`

function swarmCursorModule() {
  return {
    name: 'swarm-cursor-module',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source === './SwarmCursor.css' && importer?.includes('Swarm Cursor')) return swarmCss
      if (!importer) return null

      const resolved = path.resolve(path.dirname(importer), source.split('?')[0])
      if (resolved === swarmJs || resolved === swarmJs.replace(/\.js$/, '')) return swarmJsxId
      return null
    },
    load(id) {
      if (id === swarmJsxId) return fs.readFileSync(swarmJs, 'utf8')
      return null
    },
  }
}

// Project site: https://linnea-852.github.io/LINNEAgithub.io/
// Pages publishes the /docs folder, so production assets must use that base path.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/LINNEAgithub.io/' : '/',
  plugins: [react(), swarmCursorModule()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
}))
