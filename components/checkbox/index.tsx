import { ACTIVE, h, HOVER, PatternStructure, PropTypes, SignalProps, useLogic } from 'tarat-renderer';
import { StateSignal, after, signal } from 'atomic-signal';
import { blockPattern, blockPatternMatrix, colors, strokePattern, strokePatternMatrix, useInteractive } from '../../patterns';
import CheckIcon from '../../icons/check'

export let meta: {
  props: CheckboxProps,
  layoutStruct: CheckboxLayout
  patchCommands: []
}

export interface CheckboxProps {
  selected?: StateSignal<boolean>
  disabled?: boolean
  onChange?: (selected: boolean) => void
  children?: any
}


export const propTypes = {
  selected: PropTypes.signal.isRequired.default(() => signal(false))
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: CheckboxProps) => {
  const selected = props.selected

  after(() => {
    console.log('selected:', selected())
  }, [selected])

  function toggle () {
    if (props.disabled) return
    selected(!selected())
    props.onChange?.(selected())
  }

  return {
    selected,
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
export const layout = (props: CheckboxProps) => {
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
          selected={logic.selected()}
          disabled={props.disabled} >
        <input type="checkbox" readOnly checked={logic.selected()} className="opacity-0 absolute w-full h-full" />
        <span
          is-text selected={logic.selected()} disabled={props.disabled}
          className="relative z-10 w-full h-full flex items-center justify-center" >
          {logic.selected() ? <CheckIcon size={12} /> : ''}
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
  
  if (logicResult.selected()) {

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