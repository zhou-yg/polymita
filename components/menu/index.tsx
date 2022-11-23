import { action, signal } from 'atomic-signal';
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
  selected?: boolean;
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: MenuProps) => {
  const currentKey = signal<string>()
  const select = action((item: MenuItemType) => {
    currentKey(() => item.key)
    items(draft => {
      draft.forEach(di => {
        di.selected = di.key === item.key
        di.children?.forEach(dci => {
          dci.selected = dci.key === item.key
        })
      })
    })
  })

  const items = signal<(MenuItemType)[]>(props.items)

  return {
    items,
    currentKey,
    select,
  }
}

export const layout = (props: MenuProps) => {
  const logic = useLogic<LogicReturn>()
  const MenuItemFunc = useModule<MenuItemModule.MenuItemProps>(MenuItemModule)

  return (
    <menuBox className="inline-block border-r border-slate-300">
      <ul className="block">
        {logic.items().map((item) => {
          const isSelected = item.selected
          return (
            <menuItemBox key={item.key}>
              <div className="m-1" onClick={() => logic.select(item)} >
                {MenuItemFunc({...item, selected: isSelected}, {
                  layout(jsonTree) {
                    if (item.children) {
                      jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} flex justify-center`;
                      jsonTree.menuItem.insert?.(<span key="tag" is-text className="mx-2" >&gt;</span>)
                    }
                  },
                })}
              </div>
              {item.children && (
                <subMenuItemBox className="block bg-slate-200">
                  {item.children.map((subItem) => {
                    const isSubSelected = subItem.selected
                    return (
                      <subMenuItem className="block p-2" onClick={() => logic.select(subItem)}>
                        {MenuItemFunc({...subItem, selected: isSubSelected }, {
                          layout(jsonTree) {
                            jsonTree.menuItem.props.className = `${jsonTree.menuItem.props.className} pl-8`
                          },
                        })}
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
