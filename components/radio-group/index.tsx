import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, useModule, PropTypes } from 'tarat-renderer';
import { Signal, after, signal } from 'atomic-signal'
import * as RadioModule from '../radio'

export let meta: {
  props: RadioGroupProps,
  layoutStruct: RadioGroupLayout
  patchCommands: []
}

export interface RadioGroupProps {
  name?: string
  value?: Signal<any>
  onChange?: (value: any) => void
  options: { label: string, value: any }[]
  children?: any
}

export const propTypes = {
  value: PropTypes.signal.isRequired.default(signal(''))
}

export const logic = (props: RadioGroupProps) => {
  const value = signal(props.value())

  return {
    value
  }
}
type LogicReturn = ReturnType<typeof logic>

export type RadioGroupLayout = {
  type: 'radio-groupContainer',
  children: [
  ]
}
export const layout = (props: RadioGroupProps) => {
  const logic = useLogic<LogicReturn>()
  const Radio = useModule(RadioModule)
  const currentValue = logic.value()
  return (
    <radioGroupContainer>
       {props.options.map((option, index) => {
          return (
            <Radio key={option.label} selected={currentValue === option.value} onChange={() => {
              logic.value(option.value)
            }} >
              {option.label}
            </Radio>
          )
       })}
    </radioGroupContainer>
  )
}

export const styleRules = (props: RadioGroupProps, layout: ConvertToLayoutTreeDraft<RadioGroupLayout>) => {
  return [
  ]
}

export const designPattern = (props: RadioGroupProps, layout: ConvertToLayoutTreeDraft<RadioGroupLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
