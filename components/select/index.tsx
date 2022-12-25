import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, useModule, PropTypes } from 'tarat-renderer';
import { after, signal } from 'atomic-signal'
import * as InputModule from '../input'

export let meta: {
  props: SelectProps,
  layoutStruct: SelectLayout
  patchCommands: []
}

export interface SelectProps {
  value?: string | number
}

export const propTypes = {
  value: PropTypes.signal.isRequired.default(signal(''))
}

export const logic = (props: SignalProps<SelectProps>) => {
  const current = signal(props.value?.())
  return {
    current,
  }
}
type LogicReturn = ReturnType<typeof logic>

export type SelectLayout = {
  type: 'selectContainer',
  children: [
  ]
}
export const layout = (props: SelectProps) => {
  const logic = useLogic<LogicReturn>()
  const Input = useModule(InputModule)
  return (
    <selectContainer
      className="block">
      <Input />
    </selectContainer>
  )
}

export const styleRules = (props: SelectProps, layout: ConvertToLayoutTreeDraft<SelectLayout>) => {
  return [
  ]
}

export const designPattern = (props: SelectProps, layout: ConvertToLayoutTreeDraft<SelectLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
