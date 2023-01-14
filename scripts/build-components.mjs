import rimraf from 'rimraf'
import esbuild from 'esbuild'

import { dtsPlugin } from 'esbuild-plugin-d.ts'

import { createReadStream, createWriteStream, existsSync, readdirSync } from 'fs'

import { join } from 'path'
// get dirname in mjs
import { fileURLToPath } from 'url'
import { spawn } from 'child_process'
const __dirname = join(fileURLToPath(import.meta.url), '../')

const componentsDir = join(__dirname, '../components/')
const componentOutputDir = join(__dirname, '../dist/')
const componentEntryFile = 'index.tsx'

const componentFiles = readdirSync(componentsDir).map((file) => {
  const filePath = join(componentsDir, file)
  const inputFilePath = join(filePath, componentEntryFile)
  const outputPath = join(componentOutputDir, `${file}.js`)

  return {
    inputFilePath,
    outputPath,
  }
})

rimraf.sync(componentOutputDir)

const st = Date.now()

await Promise.all(buildComponents())

const cost = Date.now() - st
console.log(`build components done, cost ${cost / 1000}s`)

const tsc = spawn('npx', ['tsc', '--project', './scripts/components.tsconfig.json'], {
  cwd: join(__dirname, '../'),
  stdio: [process.stdin, process.stdout, process.stderr]
})

tsc.on('close', () => {
  moveDTS()
  const cost2 = Date.now() - st
  console.log(`build components done, cost ${cost2 / 1000}s`)
})


function moveDTS () {
  const distComponents = join(componentOutputDir, './components')
  readdirSync(distComponents).forEach((name) => {
    const dtsPath = join(distComponents, name, 'index.d.ts')
    if (existsSync(dtsPath)) {
      const targetPath = join(componentOutputDir, `${name}.d.ts`)
      createReadStream(dtsPath).pipe(createWriteStream(targetPath))
    }
  })
}

function buildComponents ()  {
  const buildArr = componentFiles.map(({
    inputFilePath,
    outputPath,
  }) => {
  
    if (!existsSync(inputFilePath)) {
      return
    }
  
    return esbuild
      .build({
        entryPoints: [inputFilePath],
        bundle: false,
        outfile: outputPath,
        format: 'esm',
        plugins: [
          // dtsPlugin()
        ],
      })
  })

  return buildArr
}
