import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'Form' as const
export let meta: {
  props: FormProps,
  layoutStruct: FormLayout
  patchCommands: []
}

export interface FormProps {
  layout?: {
    labelWidth?: number
    contentWidth?: number
  }
  children?: VirtualLayoutJSON[]
}

export const propTypes = {
}

export const logic = (props: SignalProps<FormProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type FormLayout = {
  type: 'formContainer',
  children: [
  ]
}
export const layout = (props: FormProps) => {
  const logic = useLogic<LogicReturn>()

  return (
    <formContainer>
       
    </formContainer>
  )
}

export const styleRules = (props: FormProps, layout: ConvertToLayoutTreeDraft<FormLayout>) => {
  return [
  ]
}

export const designPattern = (props: FormProps, layout: ConvertToLayoutTreeDraft<FormLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
