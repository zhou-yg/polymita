export function alias(rgb: string) {
  let rgb2 = rgb.replace(/^#/, '')
  let dir = -1
  if (rgb2 === 'ffffff') {
    // dir = 1
  }
  const int = parseInt(rgb2, 16)
  if (isNaN(int)) {
    return rgb
  }
  return `#${(int + dir * 1).toString(16)}`
}

export const colors = {
  primaries: ['#4096ff', '#1677ff', '#0958d9'],
  grays: ['#f0f0f0', '#d9d9d9', '#bfbfbf'],
  dangers: ['#ff4d4f', '#f5222d', '#cf1322'],
  disables: ['rgba(0,0,0,.1)', 'rgba(0,0,0,.3)'],

  nones: ['#ffffff', '#fffffe', '#fffefe'],
  light: '#ffffff',

  none: '',

  text: '#434343'
}

export const radius = {
  normal: '4px'
}
