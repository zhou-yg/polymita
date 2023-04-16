import {
  LayoutStructTree, ACTIVE, ConvertToLayoutTreeDraft, h,
  HOVER, PatternMatrix2, PatternStructure, SignalProps, useLayout, useLogic,
  VirtualLayoutJSON
} from '@polymita/renderer'
import { blockPatternMatrix, strokePatternMatrix } from '../../patterns'
import { colors } from '../../patterns/token'

export let meta: {
  props: ButtonProps,
  layoutStruct: ButtonLayoutStruct
  patchCommands: []
}

export type ButtonProps = {
  children?: string
  type?: 'primary' | 'link' | 'text'
  onClick?: (e: any) => void
  disabled?: boolean
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ButtonProps) => {
  
  return {
    count: 0
  }
}

export type ButtonLayoutStruct = {
  type: 'buttonBox',
  children: [
    {
      type: 'span'
    }
  ]
}

// tailwindcss
export const layout = (props: ButtonProps): VirtualLayoutJSON => {
  const logicResult = useLogic<LogicReturn>()

  return (
    <buttonBox
      className="inline-block px-2 py-1 rounded hover:cursor-pointer"
      is-container
      has-decoration
      selected={false}
      disabled={props.disabled}
    >
      <span 
        is-text
        selected={false}
        disabled={props.disabled}
        className="block select-none"
        onClick={(e) => {
          if (props.disabled) return
          props.onClick?.(e)
        }}
      >
         {props.children}
      </span>
    </buttonBox>
  )
}

export const designPatterns = (props: ButtonProps): PatternMatrix2 => {
  const logicResult = useLogic<LogicReturn>()

  const entry = [HOVER, ACTIVE, 'selected', 'disabled'];

  switch (props.type) {
    case 'primary':
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.light],
        })
      ]
    case 'text':
      return [
        entry,
        blockPatternMatrix({
          bg: [colors.light, colors.grays[0], colors.grays[1]],
          text: [colors.text],
        })
      ]
      break
    case 'link':
      return [
        entry,
        strokePatternMatrix({
          border: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
          text: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
        })
      ]
      break;

    default:
      return [
        entry,
        strokePatternMatrix({
          bdw: 1,
          border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
          text: [colors.text, colors.primaries[1], colors.primaries[2]],
        })
      ]
      break;
  }
}

// css in js
export const styleRules = (props: ButtonProps, draft: ConvertToLayoutTreeDraft<ButtonLayoutStruct>) => {
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
