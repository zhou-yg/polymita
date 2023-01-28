// for Outlined types
import { IssuesCloseOutlined } from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers'
import { h, createComponent } from '@polymita/renderer'

const IssuesCloseOutlinedSVGString = renderIconDefinitionToSVGElement(
  IssuesCloseOutlined,
  {
    extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
  }
)

const styleMap = {
  outlined: IssuesCloseOutlinedSVGString
}

interface IconProps {
  className?: string
  size?: number | string
  color?: string
  type?: 'outlined'
  spin?: boolean
}

const Icon = createComponent((props: IconProps = {}) => {
  const style = {
    fontSize: (props.size || 16) + 'px',
    color: props.color,
    display: 'inline-block'
  }
  const cls = props.className
  const html = styleMap[props.type || 'outlined']
  return h('polymitaIcon', { _html: html, style, className: cls })
})

export default Icon
