import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, PatternStructure } from 'tarat-renderer';
import { after, signal } from 'atomic-signal'
import { blockPattern, colors, strokePattern, useInteractive } from '../../patterns';
export let meta: {
  props: RadioProps,
  layoutStruct: RadioLayout
  patchCommands: []
}
export interface RadioProps {
  selected?: boolean
  disabled?: boolean
  onChange?: (selected: boolean) => void
  children?: any
}

export const logic = (props: SignalProps<RadioProps>) => {
  const interactive = useInteractive(props)

  return {
    interactive,
  }
}
type LogicReturn = ReturnType<typeof logic>

export type RadioLayout = {
  type: 'radioContainer',
  children: [
    {
      type: 'radioBox',
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
export const layout = (props: RadioProps) => {
  const logic = useLogic<LogicReturn>()
  return (
    <radioContainer
      className="relative flex items-center cursor-pointer" 
      {...logic.interactive.events}
      onClick={() => !props.disabled && props.onChange(!props.selected)} >
      <radioBox
        className="relative block mr-2 rounded-full "
        style={{ width: '16px', height: '16px' }} 
        is-container
        has-decoration >
        <input type="checkbox" readOnly checked={props.selected} className="opacity-0 absolute w-full h-full" />
        <span className="relative z-10 w-full h-full flex items-center justify-center" >
          {props.selected ? <circle is-fillText className="block rounded-full" style={{ width: '6px', height: '6px' }} /> : ''}
        </span>
      </radioBox>
      <checkBoxLabel className="select-none">
        {props.children}
      </checkBoxLabel>
    </radioContainer>
  )
}

export const styleRules = (props: RadioProps, layout: ConvertToLayoutTreeDraft<RadioLayout>) => {
  return [
  ]
}

export const designPattern = (props: RadioProps, layout: ConvertToLayoutTreeDraft<RadioLayout>) => {
  const logicResult = useLogic<LogicReturn>()
  let pattern: PatternStructure;

  const states = {
    hover: logicResult.interactive.states.hover(),
    active: logicResult.interactive.states.active(),
    disabled: props.disabled,
    selected: props.selected
  }

  if (states.selected) {
    pattern = blockPattern(states,
      {
        bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2], colors.primaries[0]],
        text: [colors.light, colors.light, colors.light, colors.light],
      }
    )
  } else {
    pattern = strokePattern(states,
      {
        bdw: 1,
        border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
        text: [colors.text, colors.primaries[1], colors.primaries[2]],
      },
    )
  }

  return {...pattern}
}
