import esbuild from 'esbuild'

import mdx from '@mdx-js/esbuild'

import { existsSync, fstat, readdir, readdirSync, watchFile, writeFileSync } from 'fs'

import { join } from 'path'
// get dirname in mjs
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
const __dirname = join(fileURLToPath(import.meta.url), '../')

const componentsDir = join(__dirname, '../components/')
const demoOutputDir = join(__dirname, '../demo-site/components')
const demoEntryFile = 'demo.mdx'


const componentFiles = readdirSync(componentsDir).map((file) => {
  const filePath = join(componentsDir, file)
  const demoFilePath = join(filePath, demoEntryFile)
  const demoOutputPath = join(demoOutputDir, `${file}.js`)

  return {
    inputFilePath: demoFilePath,
    outputPath: demoOutputPath,
  }
})

const docDir = join(__dirname, '../docs')
const docOutputDir = join(__dirname, '../demo-site/docs')

console.log('__dirname: ', __dirname);
console.log('docDir: ', docDir);
console.log('componentsDir: ', componentsDir);
console.log('demoOutputDir: ', demoOutputDir);
console.log('docOutputDir: ', docOutputDir);

const docFiles = readdirSync(docDir).map((file) => {
  const filePath = join(docDir, file)
  const outputPath = join(docOutputDir, `${file.replace('.mdx', '')}.js`)

  return {
    inputFilePath: filePath,
    outputPath,
  }
})

function buildTw () {
  const instance = spawn('npm', ['run', 'build:demo:tw'], {
    cwd: join(__dirname, ''),
    stdio: [process.stdin, process.stdout, process.stderr]
  })
}

const demoIndex = join(__dirname, '../demo-site/index.tsx')

watchFile(demoIndex, (s1, s2) => {
  buildTw()
})

const files = [
  ...docFiles,
  ...componentFiles,
]
/**
 * compile mdx to site components
 */
const arr =  files.map(({
  inputFilePath,
  outputPath,
}) => {

  if (!existsSync(inputFilePath)) {
    return
  }

  return esbuild
    .build({
      entryPoints: [inputFilePath],
      bundle: true,
      outfile: outputPath,
      format: 'esm',
      watch: {
        onRebuild (error, result) {
          if (error) console.error('watch build failed:', error)
          else {
            console.log('watch build succeeded:', result)
            buildTw()
          }
        }
      },
      plugins: [
        mdx()
      ],
      // tsconfig: '',
      external: ['react', 'tarat-renderer', 'atomic-signal']
    })
})

await Promise.all(arr)

files.map(({
  file,
  filePath,
  demoFilePath,
  demoOutputPath,
}) => {
  if (!existsSync(demoFilePath)) {
    return
  }
  const indexDTS = join(demoOutputDir, `${file}.d.ts`)
  writeFileSync(indexDTS, `
declare function export_default(): JSX.Element;
export { export_default as default }
  `);
})

console.log('start watching...')