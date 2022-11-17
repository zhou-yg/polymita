import { createRenderer, SingleFileModule } from 'tarat-renderer'
import React from 'react'

export function RenderToReact (module: SingleFileModule) {

  const renderer = createRenderer(module, {
    framework: {
      name: 'react',
      lib: React
    },
  })
  
  return (p: any) => {
    return renderer.render(p)
  }
}
