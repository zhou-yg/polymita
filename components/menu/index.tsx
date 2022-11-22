import { useModule } from 'tarat-renderer';
import { h, PatternStructure, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern } from '../../patterns';
import * as MenuItemModule from '../menu-item'
export interface MenuProps {
  items: MenuItemType[];
}
export interface MenuItemType {
  children?: MenuItemType[];
  label: string;
  key: string;

}


type LogicReturn = ReturnType<typeof logic>


export const logic = (props: MenuProps) => {
  return {

  }
}

export const layout = (props: MenuProps) => {
  const MenuItemFunc = useModule(MenuItemModule)

  return (
    <menuBox className="inline-block border border-slate-300 p-2">
      {props.items.map((item) => {
        return (
          <menuItem key={item.key} >
            {MenuItemFunc(item)}
          </menuItem>
        )
      })}
    </menuBox>
  )
}

export const designPattern = (props: MenuProps) => {
  const pattern = blockPattern
}

export const styleRules = (props: MenuProps) => {
  return []
}
