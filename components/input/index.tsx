import { ACTIVE, FOCUS, h, HOVER, PatternMatrix2, PatternStructure, PropTypes, useLayout, useLogic, VirtualLayoutJSON } from '@polymita/renderer'
import { blockPattern, strokePattern, strokePatternMatrix, useInteractive } from '../../patterns'
import { action, after, Signal, signal, StateSignal } from '@polymita/signal'
import { colors } from '../../patterns/token'
import { SignalProps } from '@polymita/renderer'

export let meta: {
  props: InputProps,
  layoutStruct: InputLayout,
  patchCommands: []
}

export interface InputProps {
  placeholder?: string
  disabled?: boolean
  value:  Signal< string | number>
  type?: string
  focused?: boolean
  'value-path'?: string | string[]
  onInput?: (v: string | number) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const propTypes = {
  value: PropTypes.signal.isRequired
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: InputProps) => {
  const value = props.value

  after(() => {
    props.onInput?.(value())
  }, [value])

  function onFocus () {
    props.onFocus?.()
  }
  function onBlur () {
    props.onBlur?.()
  }

  return {
    onFocus,
    onBlur,
    value,
  }
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
export const layout = (props: InputProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()

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
        onFocus={logic.onFocus}
        onBlur={logic.onBlur}
        type={props.type}
        disabled={props.disabled}
        value={logic.value}
        value-path={props['value-path']}
      />
    </inputBox>
  )
}

export const designPatterns = (props: InputProps): PatternMatrix2 => {

  return [
    [HOVER, ACTIVE, FOCUS, 'disabled'],
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[0],colors.primaries[1]],
    })
  ]
}

// css in js
export const styleRules = (props: InputProps) => {
}
