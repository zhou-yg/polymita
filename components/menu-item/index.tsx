import { h, PatternStructure, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern, useInteractive } from '../../patterns';
import { colors } from '../../patterns/token';

export interface MenuItemProps {
  children?: MenuItemProps[];
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

export const layout = (props: MenuItemProps) => {
  const logic = useLogic<LogicReturn>()

  return (
    <menuItem is-container className="block p-2 rounded-lg" {...logic.interactive.events}>
      <span is-text >
        {props.label}
      </span>
    </menuItem>
  )
}

export const designPattern = (props: MenuItemProps) => {
  const logic = useLogic<LogicReturn>()
  const pattern = blockPattern(logic.interactive.states, {
    bg: [colors.none, colors.primaries[1], colors.primaries[2]],
    text: [colors.text, colors.none],
  })
  return pattern
}

export const styleRules = (props: MenuItemProps) => {
  return []
}
