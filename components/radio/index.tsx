import { h, SignalProps, useLogic, ConvertToLayoutTreeDraft, PatternStructure, ACTIVE, HOVER, PatternMatrix2, VirtualLayoutJSON } from '@polymita/renderer';
import { after, signal } from '@polymita/signal'
import { blockPattern, blockPatternMatrix, colors, strokePattern, strokePatternMatrix, useInteractive } from '../../patterns';
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

export const logic = (props: RadioProps) => {
  return {
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
export const layout = (props: RadioProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  return (
    <radioContainer
      className="relative flex items-center cursor-pointer" 
      onClick={() => !props.disabled && props.onChange?.(!props.selected)} >
      <radioBox
        className="relative block mr-2 rounded-full "
        style={{ width: '16px', height: '16px' }} 
        is-container
        has-decoration
        selected={props.selected}
        disabled={props.disabled} >
        <input type="checkbox" readOnly checked={props.selected} className="opacity-0 absolute w-full h-full" />
        <span className="relative z-10 w-full h-full flex items-center justify-center" >
          {props.selected
            ? <circle is-fillText selected={props.selected}
            disabled={props.disabled} className="block rounded-full" style={{ width: '6px', height: '6px' }} /> 
            : ''
          }
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

export const designPatterns = (props: RadioProps): PatternMatrix2 => {
  const logicResult = useLogic<LogicReturn>()

  const arr = [HOVER, ACTIVE, 'selected', 'disabled']
  
  if (props.selected) {

    return [
      arr,
      blockPatternMatrix(
        {
          bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2], colors.primaries[0]],
          text: [colors.light, colors.light, colors.light, colors.light],
        }  
      )
    ];
  }

  return [
    arr,
    strokePatternMatrix({
      bdw: 1,
      border: [colors.grays[1], colors.primaries[1], colors.primaries[2]],
      text: [colors.text, colors.primaries[1], colors.primaries[2]],
    }),
  ]
}