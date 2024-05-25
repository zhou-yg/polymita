import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, createComposeComponent, createFunctionComponent } from '@polymita/renderer';
import * as Form from '.'
import * as FormItem from './form-item'
import * as Input from '../input'
import { useState } from 'react';

export const name = 'FormTest' as const
export let meta: {
  props: FormTestProps,
  layoutStruct: FormTestLayout
  patchCommands: []
}

export interface FormTestProps {
}

export const propTypes = {
}

export const logic = (props: SignalProps<FormTestProps>) => {
  const [form, setForm] = useState({
    name: '',
    password: '',
  });

  return {
    form,
    setForm,
  }
}
type LogicReturn = ReturnType<typeof logic>

export type FormTestLayout = {
  type: 'formTestContainer',
  children: [
  ]
}

const FormCpt = createFunctionComponent(Form)
const FormItemCpt = createComposeComponent(FormItem)
const InputCpt = createFunctionComponent(Input)
export const layout = (props: FormTestProps) => {
  const logic = useLogic<LogicReturn>()
  return (
    <formTestContainer>
      <formResult>
        name: {logic.form.name} <br/>
        password: {logic.form.password}
      </formResult>
      <br/>
      <br/>
      <FormCpt
        layout={{ labelWidth: '6em' }} 
        onChange={(k, val) => {
          console.log('k, val: ', k, val);
          logic.setForm(pre => {
            return {
              ...pre,
              [k]: val,
            }
          })
        }}
        form={
          [
            {
              label: 'name',
              name: 'name',
              value: logic.form.name
            },
            {
              label: 'password',
              name: 'password',
              value: logic.form.password
            }
          ]
        }
      />
    </formTestContainer>
  )
}

export const styleRules = (props: FormTestProps, layout: ConvertToLayoutTreeDraft<FormTestLayout>) => {
  return [
  ]
}

export const designPattern = (props: FormTestProps, layout: ConvertToLayoutTreeDraft<FormTestLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
