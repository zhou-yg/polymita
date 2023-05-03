import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, createComposeComponent, createFunctionComponent } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'
import * as Form from '../form'
import * as FormItem from '../form-item'
import * as Input from '../input'

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
  const name = signal('');
  const password = signal('');

  return {
    name,
    password,
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
        name: {logic.name()} <br/>
        password: {logic.password()}
      </formResult>
      <br/>
      <br/>
      <FormCpt
        layout={{ labelWidth: '6em' }} 
        form={
          <div>
            <FormItemCpt label="name" >
              <InputCpt value={logic.name} />
            </FormItemCpt>
            <FormItemCpt label="password" >
              <InputCpt value={logic.password} />
            </FormItemCpt>
          </div>
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
