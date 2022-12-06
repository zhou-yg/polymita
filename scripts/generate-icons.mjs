import { join } from 'path'
// get dirname in mjs
import { fileURLToPath } from 'url'
const __dirname = join(fileURLToPath(import.meta.url), '../')

import * as icons from '@ant-design/icons-svg'
import { readFileSync, writeFileSync } from 'fs'

const settingJSON = join(__dirname, '../icons/setting.json')

const setting = JSON.parse(readFileSync(settingJSON).toString())

const iconsDir = join(__dirname, '../icons/')

const keys = Object.keys(icons)

const iconStyles = ['Filled', 'Outlined', 'TwoTone']

function lowerFirst (str) {
  return str[0].toLowerCase() + str.substring(1)
}

const iconComponentTemplate = (iconName, styles) => `// for ${styles.join(' ')} types
import {
${styles.map(postfix => `  ${iconName}${postfix}`).join(',\n')}
} from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers'
import { h, createComponent } from 'tarat-renderer'

${styles.map(postfix => `const ${iconName}${postfix}SVGString = renderIconDefinitionToSVGElement(
  ${iconName}${postfix},
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)`).join('\n')}

const styleMap = {
${styles.map(postfix => `  ${lowerFirst(postfix)}: ${iconName}${postfix}SVGString`).join(',\n')}
}

interface IconProps {
  className?: string
  size?: number | string
  color?: string
  type?: ${styles.map(s => `'${lowerFirst(s)}'`).join(' | ')}
  spin?: boolean
}

const Icon = createComponent((props: IconProps = { }) => {
  const style = {
    fontSize: (props.size || 16) + 'px',
    color: props.color,
    display: 'inline-block',
  }
  const cls = props.className
  const html = styleMap[props.type || '${lowerFirst(styles[0])}']
  return h('polymitaIcon', { _html: html, style, className: cls })
})

export default Icon
`

function camelToDash(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

let keysToGenerate = keys

let keyStyleMap = {}

keysToGenerate.forEach(k => {
  const k2 = k.replace(new RegExp(iconStyles.join('|')), '')
  if (!keyStyleMap[k2]) {
    keyStyleMap[k2] = []
  }
  iconStyles.forEach(s => {
    if (new RegExp(`${s}$`).test(k)) {
      keyStyleMap[k2].push(s)
    }
  })
})

if (setting.include && setting.include.length > 0) {
  Object.keys(keyStyleMap).forEach(key => {
    if (!setting.include.some(str => new RegExp(str, 'i').test(key))) {
      delete keyStyleMap[key]
    }
  })
}
if (setting.exclude && setting.exclude.length > 0) {
  Object.keys(keyStyleMap).forEach(key => {
    if (setting.exclude.some(str => new RegExp(str, 'i').test(key))) {
      delete keyStyleMap[key]
    }
  })
}


Object.entries(keyStyleMap).forEach(([iconName, styles]) => {

  const iconComponent = iconComponentTemplate(iconName, styles)
  const iconComponentPath = join(iconsDir, `${camelToDash(iconName)}.tsx`)
  writeFileSync(iconComponentPath, iconComponent)
})
