import { h, PatternStructure, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern } from '../../patterns';

export interface MenuItemProps {
  children?: MenuItemProps[];
  label: string;
  key: string;
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: MenuItemProps) => {
  return {

  }
}

export const layout = (props: MenuItemProps) => {

  return (
    <menuItem is-container className="block p-2">
      <span is-text >
        {props.label}
      </span>
    </menuItem>
  )
}

export const designPattern = (props: MenuItemProps) => {
  const pattern = blockPattern
}

export const styleRules = (props: MenuItemProps) => {
  return []
}
