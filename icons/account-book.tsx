// for Filled Outlined TwoTone types
import { AccountBookFilled,AccountBookOutlined,AccountBookTwoTone } from '@ant-design/icons-svg'
import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import { h, createComponent } from 'tarat-renderer';

const AccountBookFilledSVGString = renderIconDefinitionToSVGElement(AccountBookFilled, {
  extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
});
const AccountBookOutlinedSVGString = renderIconDefinitionToSVGElement(AccountBookOutlined, {
  extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
});
const AccountBookTwoToneSVGString = renderIconDefinitionToSVGElement(AccountBookTwoTone, {
  extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
});

const styleMap = {
  filled: AccountBookFilledSVGString,
  outlined: AccountBookOutlinedSVGString,
  twoTone: AccountBookTwoToneSVGString
}

interface IconProps {
  size?: number | string;
  color?: string;
  type: 'filled' | 'outlined' | 'twoTone';
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