import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'FormItem' as const
export let meta: {
  props: FormItemProps,
  layoutStruct: FormItemLayout
  patchCommands: []
}

export interface FormItemProps {
  labelWidth?: number
  contentWidth?: number
  name?: string
  label?: string
  children?: VirtualLayoutJSON | VirtualLayoutJSON[]
}

export const propTypes = {
}

export const logic = (props: SignalProps<FormItemProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type FormItemLayout = {
  type: 'formItemContainer',
  children: [
  ]
}
export const layout = (props: FormItemProps): VirtualLayoutJSON => {
  const { name, label } = props;
  return (
    <formItemContainer className="flex items-center mb-4">
      <formItemLabel className="flex-none text-right mr-2" style={{ width: props.labelWidth }} >
        {label}
        {label ? <formItemLabelColon className="m-1" >:</formItemLabelColon> : null}
      </formItemLabel>
      <formItemContent className="flex-1" style={{ width: props.contentWidth }}>
        {props.children}
      </formItemContent>
    </formItemContainer>
  )
}

export const styleRules = (props: FormItemProps, layout: ConvertToLayoutTreeDraft<FormItemLayout>) => {
  return [
  ]
}

export const designPattern = (props: FormItemProps, layout: ConvertToLayoutTreeDraft<FormItemLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
