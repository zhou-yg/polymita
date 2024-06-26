import { ACTIVE, FOCUS, h, HOVER, PatternMatrix2, PatternStructure, PropTypes, useLayout, useLogic, VirtualLayoutJSON } from '@polymita/renderer'
import { blockPattern, strokePattern, strokePatternMatrix, useInteractive } from '../../patterns'
import { colors } from '../../patterns/token'
import set from 'lodash/set'
import get from 'lodash/get'
import { useEffect, useState } from 'react'

export let meta: {
  props: InputProps<string | number>,
  layoutStruct: InputLayout,
  patchCommands: []
}

export interface InputProps<T extends string | number> {
  placeholder?: string
  disabled?: boolean
  value:  T
  type?: string
  focused?: boolean
  'value-path'?: string | string[]
  onInput?: (v: T) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const propTypes = {
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: InputProps<string | number>) => {

}

export type InputLayout = {
  type: 'inputBox',
  children: [
    {
      type: 'input',
    }
  ]
}

// tailwindcss
export const layout = (props: InputProps<string | number>): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()

  const value = props['value-path'] ? get(props.value, props['value-path']) : props.value

  return (
    <inputBox
      className="block">
      <input
        placeholder={props.placeholder}
        is-container
        has-decoration
        is-text
        className="block w-full select-none outline-none border-0 px-2 py-1 rounded"
        autoFocus={props.focused}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        type={props.type}
        disabled={props.disabled}
        value={value}
        onChange={e => {
          if (props['value-path']) {
            const r = set(props.value as any, props['value-path'], e.target.value)
            props.onInput({...r})
          } else {
            props.onInput(e.target.value)
          }
        }}
      />
    </inputBox>
  )
}

export const designPatterns = (props: InputProps<string | number>): PatternMatrix2 => {

  return [
    [HOVER, ACTIVE, FOCUS, 'disabled'],
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[0],colors.primaries[1]],
    })
  ]
}
