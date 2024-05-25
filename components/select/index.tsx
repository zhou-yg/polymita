import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, PropTypes, VirtualLayoutJSON, UseComponent, createFunctionComponent } from '@polymita/renderer';
import * as InputModule from '../input'
import * as MenuModule from '../menu'
import { useMemo, useState } from 'react';
import set from 'lodash/set'
import get from 'lodash/get'

export const name = 'Select' as const

export let meta: {
  props: SelectProps,
  layoutStruct: SelectLayout
  patchCommands: []
}

export interface SelectProps {
  value?: any
  options: { label: string, value: any }[]
  disabled?: boolean
  
  onChange?: (value: string) => void
  'value-path'?: string | string[]
}

export const propTypes = {
}

export const logic = (props: SelectProps) => {
  const [current, setCurrent] = useState(props.value)
  const [focused, setFocused] = useState(false)
  const [optionItems, setOptionItems] = useState((props.options || []).map((option) => {
    return {
      label: option.label,
      key: option.value,
      selected: current === option.value,
    }
  }))

  const selectItem = function (item: MenuModule.MenuItemProps) {

    setCurrent((draft) => {
      const valuePath = props['value-path']
      // item.key
      if (valuePath) {
        set(draft, valuePath, item.key)
        return {...draft}
      } else {
        return item.key
      }
    })
    setFocused(false)
    props.onChange?.(current)
  }

  const currentKey = useMemo(() => {
    return get(current, props['value-path'])
  }, [current])

  return {
    currentKey,
    optionItems,
    current,
    selectItem,
    focused,
    setFocused,
  }
}
type LogicReturn = ReturnType<typeof logic>

export type SelectLayout = {
  type: 'selectContainer',
  children: [
    UseComponent<'Input', InputModule.InputLayout>
  ]
}

const Input = createFunctionComponent(InputModule)
const Menu = createFunctionComponent(MenuModule)

export const layout = (props: SelectProps): VirtualLayoutJSON => {
  const {
    optionItems,
    current,
    selectItem,
    focused,
    setFocused,
    currentKey,
  } = useLogic<LogicReturn>()

  return (
    <selectContainer
      className="block relative rounded">
      <Input 
        disabled={props.disabled}
        value={current} 
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)} 
        value-path={props['value-path']}
      />
      <optionList
        if={optionItems.length > 0 && focused}
        className="block border absolute z-10 left-0 shadow rounded p-1 w-full bg-white" style={{ top: '40px' }}>
        <Menu current={currentKey} items={optionItems} onClick={selectItem} />
      </optionList>
    </selectContainer>
  )
}

export const styleRules = (props: SelectProps, layout: ConvertToLayoutTreeDraft<SelectLayout>) => {
  layout.selectContainer.Input.inputBox.input
  return [
  ]
}

export const designPattern = (props: SelectProps, layout: ConvertToLayoutTreeDraft<SelectLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
