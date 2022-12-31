import { h, PatternStructure, SignalProps, useLayout, useLogic, PropTypes } from 'tarat-renderer'
import { after, action, signal, StateSignal, Signal } from 'atomic-signal';
import { useModule } from 'tarat-renderer';
import { blockPattern } from '../../patterns';
import * as MenuItemModule from '../menu-item'
import type { MenuItemProps } from '../menu-item';

export let meta: {
  props: MenuProps,
  layoutStruct: MenuLayout,
  patchCommands: []
}

export type MenuProps = {
  current?: Signal<MenuItemProps['key']>
  items: Signal<MenuItemProps[]>;
  onClick?: (item: MenuItemProps) => void;
}
export type { MenuItemProps } from'../menu-item'

export const propTypes = {
  current: PropTypes.signal.isRequired.default(() => signal('')),
  items: PropTypes.signal.isRequired,
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: MenuProps) => {
  const currentKey = props.current
  const select = ((item: MenuItemProps) => {
    const curKey = item.key
    currentKey(() => curKey)
    /** @TODO items是外部传入的，不是这个logic.scope，所以在action里面修改后产生的patches在commit时会丢失 */
    items(draft => {
      draft.forEach(di => {
        di.selected = di.key === curKey
        di.children?.forEach(dci => {
          dci.selected = dci.key === curKey
        })
      })
    })
    props.onClick?.(item)
  })

  const items = props.items

  // after(() => {
  //   const curKey = currentKey()

  //   items(draft => {
  //     draft.forEach(di => {
  //       di.selected = di.key === curKey
  //       di.children?.forEach(dci => {
  //         dci.selected = dci.key === curKey
  //       })
  //     })
  //   })
    
  // }, [select])

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

export const layout = (props: MenuProps) => {
  const logic = useLogic<LogicReturn>()
  const MenuItemFunc = useModule(MenuItemModule)
  
  return (
    <menuBox className="block border-slate-300">
      <ul className="block" >
        {logic.items().map((item) => {
          const isSelected = item.selected
          let element = MenuItemFunc({
            ...item,
            hasItemChildren: !!item.children,
            selected: isSelected,
            override: {
              layout(props, jsonTree) {
                if (props.hasItemChildren) {
                  jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex items-center`;
                  jsonTree.menuItem.span.props.className = `${jsonTree.menuItem.span.props.className} flex-1`;
                  jsonTree.menuItem.insert?.(<spanIcon key="tag" is-text className="mx-2" >&gt;</spanIcon>)
                }
                return []
              },
            }
          });

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
                        {MenuItemFunc({...subItem, selected: isSubSelected, override: {
                          layout(props, jsonTree) {
                            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`
                          },
                        }})}
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
