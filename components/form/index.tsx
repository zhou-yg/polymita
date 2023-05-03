import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'
import { traverseNode } from '../../shared/nodes';
import * as FormItem from '../form-item'

export const name = 'Form' as const
export let meta: {
  props: FormProps,
  layoutStruct: FormLayout
  patchCommands: []
}

export interface FormProps {
  layout?: {
    labelWidth?: number | string
    contentWidth?: number | string
  }
  form?: VirtualLayoutJSON | VirtualLayoutJSON[]
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
export const layout = (props: FormProps): VirtualLayoutJSON => {
  const { form } = props

  console.log('form: ', form);
  traverseNode(form, (node: any) => {
    if (typeof node.type === 'function' && node.type.name === FormItem.name) {
      node.props.labelWidth = props.layout?.labelWidth
      node.props.contentWidth = props.layout?.contentWidth
    }
  })

  return (
    <formContainer className="block">
      {form}
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
