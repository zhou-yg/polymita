import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, PropTypes, VirtualLayoutJSON, createFunctionComponent } from '@polymita/renderer';
import { Signal, after, signal } from '@polymita/signal'
import * as RadioModule from '../radio'
import { useState } from 'react';

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

export const propTypes = {
}

export const logic = (props: RadioGroupProps) => {
  
  return {
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
  const currentValue = props.value
  return (
    <radioGroupContainer>
       {props.options.map((option, index) => {
          return (
            <Radio 
              key={option.label}
              selected={currentValue === option.value}
              onChange={() => {
                props.onChange(option.value)
              }} 
            >
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
