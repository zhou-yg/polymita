// for Outlined types
import { LoadingOutlined } from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import { h, createComponent } from 'tarat-renderer';

const LoadingOutlinedSVGString = renderIconDefinitionToSVGElement(LoadingOutlined, {
  extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
});

const styleMap = {
  outlined: LoadingOutlinedSVGString
}

interface IconProps {
  size?: number | string;
  color?: string;
  type: 'outlined';
}

const Icon = createComponent((props: IconProps = {}) => {
  const style = {
    fontSize: (props.size || 16) + 'px',
    color: props.color,
  }
  const html = styleMap[props.type];
  return h('polymitaIcon', { _html: html, style })
});

export default Icon