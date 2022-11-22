import { h, PatternStructure, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern, strokePattern } from '../../patterns'
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
  const hover = signal(false)
  const active = signal(false)

  const mouseOver = action(() => {
    hover(() => true)
  })
  const mouseLeave = action(() => {
    hover(() => false)
  })
  const mouseDown = action(() => {
    active(() => true)
  })
  const mouseUp = action(() => {
    active(() => false)
  })
  
  return {
    interactive: {
      hover: hover,
      active: active,
      selected: true,
      disabled: !!props.disabled,
    },
    mouseOver,
    mouseLeave,
    mouseDown,
    mouseUp,
    count: 0
  }
}


// tailwindcss
export const layout = (props: ButtonProps) => {
  const logicResult = useLogic<LogicReturn>()

  // const v = logicResult.interactive.actionType()
  // console.log('logicResult.interactive.actionType(): ', v, typeof v);

  const events = props.disabled ? {} : {
    onMouseLeave: logicResult.mouseLeave,
    onMouseOver: logicResult.mouseOver,
    onMouseDown: logicResult.mouseDown,
    onMouseUp: logicResult.mouseUp,
  }

  return (
    <buttonBox
      className="inline-block px-2 py-1 rounded-lg hover:cursor-pointer"
      {...events}
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
  const blockPatternWithInteractive = blockPattern.bind(null, logicResult.interactive)
  const strokePatternWithInteractive = strokePattern.bind(null, logicResult.interactive)
  switch (props.type) {
    case 'primary':
      pattern = blockPatternWithInteractive(
        {
          bg: [colors.primaries[0], colors.primaries[1], colors.primaries[2]],
          text: colors.none,
        }
      )
      break;
    case 'link':
      pattern = strokePatternWithInteractive({
        border: [colors.primaries[0], colors.primaries[1], colors.primaries[2]],
        text: [colors.primaries[0], colors.primaries[1], colors.primaries[2]],
      })
      break;
    case 'text':
      pattern = blockPatternWithInteractive(
        {
          bg: [colors.none, colors.grays[0], colors.grays[1]],
          text: colors.text,
        },
      )
      break
    default:
      pattern = strokePatternWithInteractive(
        {
          bdw: 1,
          border: [colors.primaries[1], colors.grays[1], colors.primaries[2]],
          text: [colors.primaries[1], colors.text, colors.primaries[2]],
        },
      )
      break;
  }
  console.log('pattern: ', props.type, pattern);
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
