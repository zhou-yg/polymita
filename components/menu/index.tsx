import { h, PatternStructure, SignalProps, useLayout, useLogic, PropTypes, VirtualLayoutJSON, UseModule } from '@polymita/renderer'
import { after, action, signal, StateSignal, Signal } from '@polymita/signal';
import { createFunctionComponent } from '@polymita/renderer';
import { blockPattern } from '../../patterns';
import * as MenuItemModule from '../menu-item'
import type { MenuItemProps } from '../menu-item';
import { useState } from 'react';

type vv = typeof MenuItemModule.layout

export let meta: {
  props: MenuProps,
  layoutStruct: MenuLayout,
  patchCommands: []
}

export type MenuProps = {
  current?: MenuItemProps['key']
  items: MenuItemProps[];
  onClick?: (item: MenuItemProps) => void;
}
export type { MenuItemProps } from'../menu-item'

export const propTypes = {
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: MenuProps) => {
  const currentKey = props.current
  const [items, setItems] = useState(props.items)
  const select = ((item: MenuItemProps) => {
    const curKey = item.key

    setItems(draft => {
      draft.forEach(di => {
        di.selected = di.key === curKey
        di.children?.forEach(dci => {
          dci.selected = dci.key === curKey
        })
      })
      return draft.slice()
    })
    props.onClick?.(item)
  })

  return {
    items,
    currentKey,
    select,
  }
}

type MenuLayout = {
  type: 'menuBox',
  children: [
    {
      type: 'ul',
      children: [
        {
          type: 'menuItemBox',
          children: [
            {
              type: 'div',
              children: [
                typeof MenuItemModule['meta']['layoutStruct']
              ]
            },
            {
              type: 'subMenuItemBox',
              children: [
                {
                  type: 'subMenuItem',
                  children: [
                    typeof MenuItemModule['meta']['layoutStruct']
                  ]    
                },
              ]
            }
          ]
        }
      ]
    }
  ]
}

const MenuItemFunc = createFunctionComponent(MenuItemModule)

export const layout = (props: MenuProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  
  return (
    <menuBox className="block border-slate-300">
      <ul className="block" style={{ margin:0, padding: 0 }} >
        {logic.items.map((item) => {
          const isSelected = item.key === logic.currentKey
          let element = <MenuItemFunc {...{
            ...item,
            hasItemChildren: !!item.children,
            selected: isSelected,
            override: {
              layout(props, jsonTree) {
                if (props.hasItemChildren) {
                  jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
                  jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
                  jsonTree.menuItem.addChild?.(<spanIcon key="tag" is-text className="mx-2" >&gt;</spanIcon>)
                }
                return []
              },
            }
          }} />;

          return (
            <menuItemBox data-name="menu-item-box" key={item.key}>
              <div className="p-1" onMouseDown={() => {
                logic.select(item)
              }} >
                {element as any}
              </div>
              {item.children && (
                <subMenuItemBox className="block p-1 bg-slate-200">
                  {item.children.map((subItem) => {
                    const isSubSelected = subItem.selected
                    return (
                      <subMenuItem className="block m-1" onClick={() => logic.select(subItem)}>
                        <MenuItemFunc {...subItem} selected={isSubSelected} override= {{
                          layout(props, jsonTree) {
                            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`
                          },
                        }} />
                      </subMenuItem>
                    )
                  })}
                </subMenuItemBox>
              )}
            </menuItemBox>
          )
        })}
      </ul>
    </menuBox>
  )
}

export const designPattern = (props: MenuProps) => {
  const pattern = blockPattern
}

export const styleRules = (props: MenuProps) => {
  return []
}
