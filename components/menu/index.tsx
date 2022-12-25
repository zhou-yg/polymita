import { h, PatternStructure, SignalProps, useLayout, useLogic, PropTypes } from 'tarat-renderer'
import { after, action, signal, StateSignal } from 'atomic-signal';
import { useModule } from 'tarat-renderer';
import { blockPattern } from '../../patterns';
import * as MenuItemModule from '../menu-item'
import type { MenuItemProps } from '../menu-item';

export type MenuProps = {
  items: StateSignal<MenuItemProps[]>;
  onClick?: (item: MenuItemProps) => void;
}

export const propTypes = {
  items: PropTypes.signal.isRequired,
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: MenuProps) => {
  const currentKey = signal<string>(null)
  const select = action((item: MenuItemProps) => {
    const curKey = item.key
    currentKey(() => curKey)
    // items(draft => {
    //   draft.forEach(di => {
    //     di.selected = di.key === curKey
    //     di.children?.forEach(dci => {
    //       dci.selected = dci.key === curKey
    //     })
    //   })
    // })
    props.onClick?.(item)
  })

  const items = props.items

  after(() => {
    const curKey = currentKey()

    items(draft => {
      draft.forEach(di => {
        di.selected = di.key === curKey
        di.children?.forEach(dci => {
          dci.selected = dci.key === curKey
        })
      })
    })
    
  }, [select])

  return {
    items,
    currentKey,
    select,
  }
}



export const layout = (props: MenuProps) => {
  const logic = useLogic<LogicReturn>()
  const MenuItemFunc = useModule(MenuItemModule)

  // console.log('MenuItemFunc: ', logic.items());
  return (
    <menuBox className="block border-r border-slate-300">
      <ul className="block">
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
              <div className="p-1" onClick={() => logic.select(item)} >
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
