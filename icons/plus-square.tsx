// for Filled Outlined TwoTone types
import {
  PlusSquareFilled,
  PlusSquareOutlined,
  PlusSquareTwoTone
} from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers'
import { h, createFunctionComponent } from '@polymita/renderer'

const PlusSquareFilledSVGString = renderIconDefinitionToSVGElement(
  PlusSquareFilled,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)
const PlusSquareOutlinedSVGString = renderIconDefinitionToSVGElement(
  PlusSquareOutlined,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)
const PlusSquareTwoToneSVGString = renderIconDefinitionToSVGElement(
  PlusSquareTwoTone,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)

const styleMap = {
  filled: PlusSquareFilledSVGString,
  outlined: PlusSquareOutlinedSVGString,
  twoTone: PlusSquareTwoToneSVGString
}

interface IconProps {
  className?: string
  size?: number | string
  color?: string
  type?: 'filled' | 'outlined' | 'twoTone'
  spin?: boolean
}

const Icon = createFunctionComponent({
  layout: (props: IconProps = {}) => {
    const style = {
      fontSize: (props.size || 16) + 'px',
      color: props.color,
      display: 'inline-block'
    }
    const cls = props.className
    const html = styleMap[props.type || 'filled']
    return h('polymitaIcon', { _html: html, style, className: cls })
  }
})

export default Icon
