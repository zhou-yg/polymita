import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

function makePath(relativePath) {
  return path.join(path.dirname(import.meta.url.replace('file:', '')), relativePath)
}

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: './site',
  server: {
    port: 5001,
    open: 'http://localhost:5001/site/index.html',
  },
  plugins: [
    tsconfigPaths({
      root: makePath('./site/'),
    })
  ],
  build: {
    rollupOptions: {
      input: {
        playground: makePath( './site/playground.html')
      }
    },
    outDir: 'site'
  }
}

export default config
