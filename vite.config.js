import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'

function makePath(relativePath) {
  return path.join(path.dirname(import.meta.url.replace('file:', '')), relativePath)
}

/**
 * @type {import('vite').UserConfig}
 */
const config = {
  base: './demo-site',
  define: {
    // 'process.env.NODE_ENV': '"development"',
  },
  server: {
    port: 5001,
    open: 'http://localhost:5001/demo-site/index.html',
  },
  plugins: [
    tsconfigPaths({
      root: makePath('./demo-site/'),
    }),
  ],
  build: {    
    // assetsDir: '',
    minify: false,

    watch: true,
    
    rollupOptions: {
      input: './demo-site/index.html',
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].[ext]`,
        assetFileNames: `[name].[ext]`,
      }
    },
    outDir: 'doc'
  }
}

export default config
