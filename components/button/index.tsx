import { h, PatternStructure, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern, strokePattern, useInteractive } from '../../patterns'
import { action, signal } from 'atomic-signal'
import { colors } from '../../patterns/token'

export interface ButtonProps {
  children?: string
  type?: 'primary' | 'link' | 'text'
  onClick: (e: any) => void
  disabled?: boolean
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ButtonProps) => {
  const interactive = useInteractive(props)
  
  return {
    interactive,
    count: 0
  }
}


// tailwindcss
export const layout = (props: ButtonProps) => {
  const logicResult = useLogic<LogicReturn>()

  // const v = logicResult.interactive.actionType()
  // console.log('logicResult.interactive.actionType(): ', v, typeof v);

  return (
    <buttonBox
      className="inline-block px-2 py-1 rounded-lg hover:cursor-pointer"
      {...logicResult.interactive.events}
      is-container
      has-border
    >
      <span is-text className="block select-none" onClick={(e) => {
        if (props.disabled) return
        props.onClick?.(e)
      }}>
         {props.children}
      </span>
    </buttonBox>
  )
}

export const designPattern = (props: ButtonProps) => {
  const logicResult = useLogic<LogicReturn>()

  let pattern: PatternStructure;

  const states = {
    ...logicResult.interactive.states,
    disabled: !!props.disabled,
    selected: false
  }

  switch (props.type) {
    case 'primary':
      pattern = blockPattern(states,
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light],
        }
      )
      break;
    case 'text':
      pattern = blockPattern(states,
        {
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text],
        },
      )
      break
    case 'link':
      pattern = strokePattern(states,
        {
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
        }
      )
      break;

    default:
      pattern = strokePattern(states,
        {
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]],
        },
      )
      break;
  }
  return pattern
}

// css in js
export const styleRules = (props: ButtonProps) => {
  const logic = useLogic<LogicReturn>()
  const layout = useLayout()
  return [
    // {
    //   target: layout.buttonBox,
    //   condition: logic.interactive.disabled,
    //   style: {
    //     cursor: 'not-allowed',
    //   }
    // }
  ]
}
