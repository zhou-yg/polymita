import { ACTIVE, FOCUS, h, HOVER, PatternMatrix2, PatternStructure, PropTypes, useLayout, useLogic, VirtualLayoutJSON } from '@polymita/renderer'
import { blockPattern, strokePattern, strokePatternMatrix, useInteractive } from '../../patterns'
import { colors } from '../../patterns/token'
import { useEffect, useState } from 'react'

export let meta: {
  props: TextareaProps,
  layoutStruct: InputLayout,
  patchCommands: []
}

export interface TextareaProps {
  placeholder?: string
  disabled?: boolean
  value:  string
  focused?: boolean
  rows?: number
  onInput?: (v: string | number) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const propTypes = {
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: TextareaProps) => {

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
export const layout = (props: TextareaProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()

  return (
    <inputBox
      className="block">
      <textarea
        placeholder={props.placeholder}
        is-container
        has-decoration
        is-text
        className="block w-full select-none outline-none border-0 px-2 py-1 rounded"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        autoFocus={props.focused}
        rows={props.rows}
        disabled={props.disabled}
        value={props.value}
        onChange={(e) => {
          props.onInput(e.target.value)
        }}
      >
        {props.value}
      </textarea>
    </inputBox>
  )
}

export const designPatterns = (props: TextareaProps): PatternMatrix2 => {

  return [
    [HOVER, ACTIVE, FOCUS, 'disabled'],
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[0],colors.primaries[1]],
    })
  ]
}

// css in js
export const styleRules = (props: TextareaProps) => {
}
