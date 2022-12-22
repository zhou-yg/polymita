import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, useModule } from 'tarat-renderer';
import { after, signal } from 'atomic-signal'
import * as RadioModule from '../radio'

export let meta: {
  props: RadioGroupProps,
  layoutStruct: RadioGroupLayout
  patchCommands: []
}

export interface RadioGroupProps {
  name?: string
  value?: any
  onChange?: (value: any) => void
  options: { label: string, value: any }[]
  children?: any
}

export const logic = (props: SignalProps<RadioGroupProps>) => {
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
