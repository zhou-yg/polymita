import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON, createFunctionComponent, createComposeComponent } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'
import * as FormItemModule from './form-item'
import * as InputModule from '../input'

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
  // form?: VirtualLayoutJSON | VirtualLayoutJSON[]
  form?: FormConfig[]
  values?: Record<string, any>
  onChange?: (key: string, value: any) => void
  onSubmit?: (values: Record<string, any>) => void
}

export interface FormConfig {
  type?: 'input' | 'select' | 'radio' | 'checkbox' | 'switch' | 'date' | 'time' | 'datetime' | 'textarea'
  dataType?: 'string' | 'number' | 'date' | 'time' | 'datetime'
  options?: { label?: string, value?: string | number }[]
  value?: string | number
  label?: string
  name?: string
  children?: FormConfig[]
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

function generateForm (form: FormConfig[], onChange: FormProps['onChange'])  {
  return form.map((item, index) => {
    let targetItem = null
    switch (item.type) {
      case 'input':
      default:
        targetItem = <InputCpt value={item.value} onInput={(v) => {
          item.name && onChange?.(item.name, v)
        }} />
    }

    return (
      <FormItemCpt key={item.name + item.label + item.type} label={item.label || item.name} >
        {targetItem}
      </FormItemCpt>
    )
  })
}

const FormItemCpt = createComposeComponent(FormItemModule)
const InputCpt = createFunctionComponent(InputModule)

export const layout = (props: FormProps): VirtualLayoutJSON => {
  const { form } = props

  const targetForm = form ? generateForm(form, props.onChange) : ''

  return (
    <formContainer className="block">
      {targetForm}
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
