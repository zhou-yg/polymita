import { join } from 'path'
// get dirname in mjs
import { fileURLToPath } from 'url'
const __dirname = join(fileURLToPath(import.meta.url), '../')


const iconsDir = join(__dirname, '../icons/')