import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, PropTypes, VirtualLayoutJSON, UseComponent, createFunctionComponent } from '@polymita/renderer';
import { Signal, action, after, computed, get, set, signal } from '@polymita/signal'
import * as InputModule from '../input'
import * as MenuModule from '../menu'

export const name = 'Select' as const

export let meta: {
  props: SelectProps,
  layoutStruct: SelectLayout
  patchCommands: []
}

export interface SelectProps {
  value?: Signal<string>
  options: { label: string, value: any }[]
  disabled?: boolean
  
  onChange?: (value: string) => void
  'value-path'?: string | string[]
}

export const propTypes = {
  value: PropTypes.signal.isRequired.default(() => signal(''))
}

export const logic = (props: SelectProps) => {
  const current = props.value
  const focused = signal(false)
  const optionItems = signal((props.options || []).map((option) => {
    return {
      label: option.label,
      key: option.value,
      selected: current() === option.value,
    }
  }))

  const selectItem = action(function (item: MenuModule.MenuItemProps) {

    current((draft) => {
      const valuePath = props['value-path']
      // item.key
      if (valuePath) {
        set(draft, valuePath, item.key)
      } else {
        return item.key
      }
    })
    focused(() => false)
    props.onChange?.(current())
  })

  const currentKey = computed(() => {
    return get(current(), props['value-path'])
  })

  return {
    currentKey,
    optionItems,
    current,
    selectItem,
    focused,
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
    currentKey,
  } = useLogic<LogicReturn>()

  return (
    <selectContainer
      className="block relative rounded">
      <Input 
        disabled={props.disabled}
        value={current} 
        onFocus={() => focused(true)}
        onBlur={() => focused(false)} 
        value-path={props['value-path']}
      />
      <optionList
        if={optionItems().length > 0 && focused()}
        className="block border absolute z-10 left-0 shadow rounded p-1 w-full bg-white" style={{ top: '40px' }}>
        <Menu current={currentKey()} items={optionItems} onClick={selectItem} />
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
