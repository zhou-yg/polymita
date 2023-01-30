import rimraf from 'rimraf'
import esbuild from 'esbuild'

import { dtsPlugin } from 'esbuild-plugin-d.ts'

import { createReadStream, createWriteStream, existsSync, readdirSync } from 'fs'

import { join, resolve } from 'path'
// get dirname in mjs
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
const __dirname = join(fileURLToPath(import.meta.url), '../')

const componentsDir = join(__dirname, '../components/')
const componentOutputDir = join(__dirname, '../dist/')
const componentEntryFile = 'index.tsx'

const iconsDir = join(__dirname, '../icons/')
const iconOutputDir = join(__dirname, '../dist/icons/')

const notComponents = ['icons']

const filesToRemove = [
  join(componentOutputDir, 'icons'),
  join(componentOutputDir, 'patterns'),
]

const componentFiles = readdirSync(componentsDir).filter(file => {
  return !notComponents.includes(file)
}).map((file) => {
  const filePath = join(componentsDir, file)
  const inputFilePath = join(filePath, componentEntryFile)
  const outputPath = join(componentOutputDir, `${file}.js`)

  return {
    inputFilePath,
    outputPath,
  }
})
const iconFiles = readdirSync(iconsDir)
.filter(f => /\.tsx/.test(f))
.map((file) => {
  const filePath = join(iconsDir, file)
  const outputPath = join(iconOutputDir, `${file.replace(/\.tsx/, '')}.js`)

  return {
    inputFilePath: filePath,
    outputPath,
  }
})

rimraf.sync(componentOutputDir)

const st = Date.now()

await buildComponents()

const cost = Date.now() - st
console.log(`build components done, cost ${cost / 1000}s`)

const tsc = spawn('npx', ['tsc', '--project', './scripts/components.tsconfig.json'], {
  cwd: join(__dirname, '../'),
  stdio: [process.stdin, process.stdout, process.stderr]
})

tsc.on('close', async () => {
  const cost2 = Date.now() - st
  console.log(`build components done, cost ${cost2 / 1000}s`)

  filesToRemove.forEach((path) => {
    rimraf.sync(path)
  })
})


function moveDTS () {
  const distComponents = join(componentOutputDir, './components')
  return readdirSync(distComponents).map((name) => {
    const dtsPath = join(distComponents, name, 'index.d.ts')
    if (existsSync(dtsPath)) {
      const targetPath = join(componentOutputDir, `${name}.d.ts`)
      return new Promise((resolve) => {
        const ws = createWriteStream(targetPath)
        createReadStream(dtsPath).pipe(ws)
        ws.on('finish', () => {
          resolve()
        })
      })
    }
  })
}

function buildComponents ()  {

  const entryPoints = [
    ...componentFiles,
    ...iconFiles,
  ].map(({
    inputFilePath,
    outputPath,
  }) => inputFilePath)

  return esbuild
      .build({
        entryPoints: entryPoints,
        bundle: true,
        outdir: componentOutputDir,
        format: 'esm',
        chunkNames: '[name]-[hash]',
        plugins: [
          // dtsPlugin()
        ],
        splitting: true,
        external: [
          '@polymita/renderer',
          '@polymita/signal'
        ]
      })
}
