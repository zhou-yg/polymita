import esbuild from 'esbuild'

import mdx from '@mdx-js/esbuild'

import { existsSync, fstat, readdir, readdirSync, writeFileSync } from 'fs'

import { join } from 'path'
// get dirname in mjs
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
const __dirname = join(fileURLToPath(import.meta.url), '../')

const componentsDir = join(__dirname, '../components/')

const demoOutputDir = join(__dirname, '../site/components')

const demoEntryFile = 'demo.mdx'

console.log('__dirname: ', __dirname);
console.log('componentsDir: ', componentsDir);

const files = readdirSync(componentsDir).map((file) => {
  const filePath = join(componentsDir, file)
  const demoFilePath = join(filePath, demoEntryFile)
  const demoOutputPath = join(demoOutputDir, `${file}.js`)

  return {
    file,
    filePath,
    demoFilePath,
    demoOutputPath,
  }
})

/**
 * compile mdx to site components
 */
const arr =  files.map(({
  filePath,
  demoFilePath,
  demoOutputPath,
}) => {

  if (!existsSync(demoFilePath)) {
    return
  }

  return esbuild
    .build({
      entryPoints: [demoFilePath],
      bundle: true,
      outfile: demoOutputPath,
      format: 'esm',
      plugins: [
        mdx()
      ],
      // tsconfig: '',
      external: ['react', 'tarat-renderer']
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

console.log(1)