import { ACTIVE, h, HOVER, PatternStructure, PropTypes, SignalProps, useLogic, VirtualLayoutJSON } from '@polymita/renderer';
import { StateSignal, after, signal } from '@polymita/signal';
import { blockPattern, blockPatternMatrix, colors, strokePattern, strokePatternMatrix, useInteractive } from '../../patterns';
import CheckIcon from '../../icons/check'

export let meta: {
  props: CheckboxProps,
  layoutStruct: CheckboxLayout
  patchCommands: []
}

export interface CheckboxProps {
  value?: StateSignal<boolean>
  disabled?: boolean
  onChange?: (value: boolean) => void
  children?: any
}


export const propTypes = {
  value: PropTypes.signal.isRequired.default(() => signal(false))
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: CheckboxProps) => {
  const value = props.value

  after(() => {
    console.log('value:', value())
  }, [value])

  function toggle () {
    if (props.disabled) return
    value(v => !v)
    props.onChange?.(value())
  }

  return {
    value,
    toggle,
  }
}

export type CheckboxLayout = {
  type: 'checkBoxContainer',
  children: [
    {
      type: 'checkBox',
      children: [
        {
          type: 'input',
        },
        {
          type: 'span',
        }
      ]
    },
    {
      type: 'checkBoxLabel',
    }
  ]
}
export const layout = (props: CheckboxProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()

  return (
    <checkBoxContainer
      className="relative flex items-center" 
      onClick={logic.toggle} >
       <checkBox
          className="relative block mr-2 rounded "
          style={{ width: '16px', height: '16px' }} 
          is-container
          has-decoration 
          selected={logic.value()}
          disabled={props.disabled} >
        <input type="checkbox" readOnly checked={logic.value()} className="opacity-0 absolute w-full h-full" />
        <span
          is-text selected={logic.value()} disabled={props.disabled}
          className="relative z-10 w-full h-full flex items-center justify-center" >
          {logic.value() ? <CheckIcon size={12} /> : ''}
        </span>
       </checkBox>
       <checkBoxLabel className="select-none">
        {props.children}
       </checkBoxLabel>
    </checkBoxContainer>
  )
}

export const designPatterns = (props: CheckboxProps) => {
  const logicResult = useLogic<LogicReturn>()

  const arr = [HOVER, ACTIVE, 'selected', 'disabled']
  
  if (logicResult.value()) {

    return [
      arr,
      blockPatternMatrix(
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2], colors.primaries[0]],
          text: [colors.light, colors.light, colors.light, colors.light],
        }  
      )
    ];
  } else {
    return [
      arr,
      strokePatternMatrix({
        bdw: 1,
        border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
        text: [colors.text, colors.primaries[1], colors.primaries[2]],
      }),
    ]
  }
}