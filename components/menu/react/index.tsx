import { createRenderer } from 'tarat-renderer'
import * as module from '../index'
import type { ButtonProps } from '../index' 
export type { ButtonProps } from '../index' 
import React from 'react'

const renderer = createRenderer(module, {
  framework: {
    name: 'react',
    lib: React
  },
})

export default (p: ButtonProps) => {
  return renderer.render(p)
}
