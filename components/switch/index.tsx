import {
  h,
  SignalProps,
  PropTypes,
  useLogic,
  ConvertToLayoutTreeDraft,
  ACTIVE,
  HOVER,
  VirtualLayoutJSON
} from '@polymita/renderer'
import { blockPatternMatrix, colors } from '../../patterns'
import set from 'lodash/set'
import get from 'lodash/get'


export let meta: {
  props: SwitchProps
  layoutStruct: SwitchLayout
  patchCommands: []
}

export interface SwitchProps {
  value: boolean | Record<string, any>
  checkedContent?: string
  uncheckedContent?: string
  'value-path'?: string | string[]
  onChange: (v: boolean | Record<string, any>) => void
}

export const propTypes = {
}

export const logic = (props: SignalProps<SwitchProps>) => {
  return {}
}
type LogicReturn = ReturnType<typeof logic>

export type SwitchLayout = {
  type: 'switchContainer'
  children: [
    { type: 'switchHandle' },
    {
      type: 'contentBox',
      children: [
        { type: 'checkedContent' },
        { type: 'uncheckedContent' }
      ]
    }
  ]
}
export const layout = (props: SwitchProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  
  const valuePath = props['value-path']

  return (
    <switchContainer 
      is-container 
      className="inline-block relative overflow-hidden" 
      style={{ minWidth: '44px', height: '22px', lineHeight: '22px', borderRadius: '11px' }}
      onClick={() => {
        const draft = props.value
        let oldValue = draft
        if (valuePath) {
          oldValue = get(draft, valuePath)
        }
        const newValue = !oldValue
        if (valuePath && typeof draft === 'object') {
          set(draft, valuePath, newValue)
          props.onChange?.({...draft})
        } else {
          props.onChange?.(newValue)
        }
      }}>
      <switchHandle is-fillText 
        style={{ width: '18px', height: '18px', top: '2px', insetInlineStart: '2px' }} 
        className="rounded-full absolute" ></switchHandle>
      <contentBox className="block h-full pointer-events-none">
        <checkedContent
          className="block h-full"
          style={{
            marginInlineStart: '9px',
            marginInlineEnd: '24px'
          }}
          is-text >
          {props.checkedContent}</checkedContent>
        <uncheckedContent 
          className="block h-full"
          style={{
            marginTop: '-22px',
            marginInlineStart: '24px',
            marginInlineEnd: '9px'
          }}      
          is-text >{props.uncheckedContent}</uncheckedContent>
      </contentBox>
    </switchContainer>
  )
}

export const styleRules = (
  props: SwitchProps,
  layout: ConvertToLayoutTreeDraft<SwitchLayout>
) => {
  let value = props['value-path'] ? get(props.value, props['value-path']) : props.value
  return [
    {
      target: layout.switchContainer.switchHandle,
      condition: value,
      style: {
        insetInlineStart: `calc(100% - 20px)`
      }
    },
    {
      target: layout.switchContainer.contentBox.uncheckedContent,
      condition: value,
      style: {
        visibility: 'hidden'
      },
    },
    {
      target: layout.switchContainer.contentBox.checkedContent,
      condition: !value,
      style: {
        visibility: 'hidden'
      },
    },
  ]
}

export const designPatterns = (
  props: SwitchProps,
  layout: ConvertToLayoutTreeDraft<SwitchLayout>
) => {
  const logic = useLogic<LogicReturn>()
  const entry = [HOVER, ACTIVE, 'selected', 'disabled']

  return [
    entry,
    blockPatternMatrix(
      props.value
        ? {
            bg: [colors.primaries[1], colors.primaries[0], colors.primaries[2]],
            text: [colors.light]
          }
        : {
            bg: [colors.grays[1], colors.grays[0], colors.grays[2]],
            text: [colors.light]
          }
    )
  ]
}
