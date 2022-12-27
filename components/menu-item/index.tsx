import { ACTIVE, h, HOVER, PatternStructure, SignalProps, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern, blockPatternMatrix, useInteractive } from '../../patterns';
import { colors } from '../../patterns/token';

export let meta: {
  props: MenuItemProps,
  layoutStruct: MenuItemLayout,
  patchCommands: []
}

export type MenuItemProps = {
  children?: MenuItemProps[];
  hasItemChildren?: boolean;
  label: string;
  key: string;
  disabled?: boolean;
  selected?: boolean
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: MenuItemProps) => {
  const interactive = useInteractive(props)

  return {
    interactive,
  }
}

type MenuItemLayout = {
  type: 'menuItem',
  children: [
    {
      type: 'span',
    }
  ]
}

export const layout = (props: MenuItemProps) => {
  const logic = useLogic<LogicReturn>()

  return (
    <menuItem 
      is-container
      selected={props.selected} disabled={props.disabled}
      className="block p-2 px-3 rounded-lg" >
      <span is-text selected={props.selected} disabled={props.disabled} >
        {props.label}
      </span>
    </menuItem>
  )
}

export const designPatterns = (props: MenuItemProps) => {
  const logic = useLogic<LogicReturn>()
  const pattern = blockPattern({
    hover: logic.interactive.states.hover(),
    active: logic.interactive.states.active(),
    selected: !!props.selected,
    disabled: !!props.disabled,
  }, {
    bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
    text: [colors.text, colors.light, colors.nones[0], colors.nones[1]],
  })
  return [
    [HOVER, ACTIVE, 'selected', 'disabled'],
    blockPatternMatrix({
      bg: [colors.none, colors.grays[1], colors.primaries[2], colors.primaries[1]],
      text: [colors.text, colors.light, colors.nones[0], colors.nones[1]],
    })
  ]
}

export const styleRules = (props: MenuItemProps) => {
  return []
}
