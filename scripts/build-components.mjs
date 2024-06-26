import rimraf from 'rimraf'
import esbuild from 'esbuild'
import { writeFileSync, existsSync, readdirSync, readFileSync, lstatSync } from 'fs'
import { execSync } from 'child_process'

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

const componentsTsConfig = join(__dirname, '../components/tsconfig.json')

const filesToRemove = [
  join(componentOutputDir, 'icons'),
  join(componentOutputDir, 'patterns'),
]

const componentFiles = readdirSync(componentsDir).filter(file => {
  return !notComponents.includes(file) && lstatSync(join(componentsDir, file)).isDirectory()
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

buildComponents().then(async () => {
  const cost = Date.now() - st
  console.log(`build components done, cost ${cost / 1000}s`)
  
  await buildTSC('cjs');
  await buildTSC('esm');
  
  await buildCSS();
})

function buildTSC (format) {
  const tsc = spawn('npx', ['tsc', '--declaration', '--project', componentsTsConfig, '--outDir', `dist/${format}`], {
    
    cwd: join(__dirname, '../'),
    stdio: 'inherit'
  })
  
  return new Promise(resolve => {
    tsc.on('close', async () => {
      const cost2 = Date.now() - st
      console.log(`generate d.ts done, cost ${cost2 / 1000}s`)
    
      filesToRemove.forEach((path) => {
        rimraf.sync(path)
      })

      resolve();
    })
  })
}

function buildCSS () {
  const tailwind = spawn(
    'tailwindcss',
    ['-i', './shared/tailwind-input.css', '-o', './dist/index.css'], 
    {
      cwd: join(__dirname, '../'),
    }
  );
  return new Promise(resolve => {
    tailwind.on('close', () => {
      const cost2 = Date.now() - st
      console.log(`generate index.css done, cost ${cost2 / 1000}s`)
      resolve();
    });
  })
}


async function buildComponents ()  {

  const entryPoints = [
    ...componentFiles,
    ...iconFiles,
  ].map(({
    inputFilePath,
    outputPath,
  }) => inputFilePath)

  for (const format of ['esm', 'cjs']) {
    await esbuild
      .build({
        entryPoints: entryPoints,
        bundle: true,
        outdir: join(componentOutputDir, format),
        format,
        chunkNames: '[name]-[hash]',
        plugins: [
          // dtsPlugin()
        ],
        tsconfig: './components/tsconfig.json',
        splitting: format === 'esm',
        external: [
          '@polymita/renderer',
        ]
      })
  }
}
