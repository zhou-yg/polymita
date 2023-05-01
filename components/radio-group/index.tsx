import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, PropTypes, VirtualLayoutJSON, createFunctionComponent } from '@polymita/renderer';
import { Signal, after, signal } from '@polymita/signal'
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
  value: PropTypes.signal.isRequired.default(() => signal(''))
}

export const logic = (props: RadioGroupProps) => {
  const value = props.value

  function changeValue (v: any) {
    if (props.onChange) {
      props.onChange(v)
    } else {
      value(v)
    }
  }
  
  return {
    changeValue,
    value
  }
}
type LogicReturn = ReturnType<typeof logic>

export type RadioGroupLayout = {
  type: 'radio-groupContainer',
  children: [
  ]
}
const Radio = createFunctionComponent(RadioModule)
export const layout = (props: RadioGroupProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  const currentValue = logic.value()
  return (
    <radioGroupContainer>
       {props.options.map((option, index) => {
          return (
            <Radio key={option.label} selected={currentValue === option.value} onChange={() => {
              logic.changeValue(option.value)
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
