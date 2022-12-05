// for Outlined types
import { Loading3QuartersOutlined } from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import { h, createComponent } from 'tarat-renderer';

const Loading3QuartersOutlinedSVGString = renderIconDefinitionToSVGElement(Loading3QuartersOutlined, {
  extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
});

const styleMap = {
  outlined: Loading3QuartersOutlinedSVGString
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