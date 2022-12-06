// for Filled Outlined TwoTone types
import {
  CloseSquareFilled,
  CloseSquareOutlined,
  CloseSquareTwoTone
} from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers'
import { h, createComponent } from 'tarat-renderer'

const CloseSquareFilledSVGString = renderIconDefinitionToSVGElement(
  CloseSquareFilled,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)
const CloseSquareOutlinedSVGString = renderIconDefinitionToSVGElement(
  CloseSquareOutlined,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)
const CloseSquareTwoToneSVGString = renderIconDefinitionToSVGElement(
  CloseSquareTwoTone,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)

const styleMap = {
  filled: CloseSquareFilledSVGString,
  outlined: CloseSquareOutlinedSVGString,
  twoTone: CloseSquareTwoToneSVGString
}

interface IconProps {
  className?: string
  size?: number | string
  color?: string
  type?: 'filled' | 'outlined' | 'twoTone'
  spin?: boolean
}

const Icon = createComponent((props: IconProps = {}) => {
  const style = {
    fontSize: (props.size || 16) + 'px',
    color: props.color,
    display: 'inline-block'
  }
  const cls = props.className
  const html = styleMap[props.type || 'filled']
  return h('polymitaIcon', { _html: html, style, className: cls })
})

export default Icon
