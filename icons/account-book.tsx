import { AccountBookFilled } from '@ant-design/icons-svg'

import { renderIconDefinitionToSVGElement } from '@ant-design/icons-svg/es/helpers';
import { h } from 'tarat-renderer';

const AccountBookFilledSVGString = renderIconDefinitionToSVGElement(AccountBookFilled, {
  extraSVGAttrs: { width: '1em', height: '1em', fill: 'currentColor' }
});

interface IconProps {
  size?: number;
  color?: string;
}

export default (props: IconProps = {}) => {
  const style = {
    fontSize: (props.size || 16) + 'px',
    color: props.color,
  }
  return h('div', { _html: AccountBookFilledSVGString, style })
};