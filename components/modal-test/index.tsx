import { createFunctionComponent, h, PatternStructure, SignalProps, useLayout, useLogic, VirtualLayoutJSON } from '@polymita/renderer'
import { Signal, after, signal } from '@polymita/signal'

import * as ButtonModule from '../button/index'
import * as ModalModule from '../modal/index'
import * as InputModule from '../input/index'

export interface ModalProps {
  children?: string
  title?: string
  onClose?: (e: any) => void
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ModalProps) => {
  const visible = signal(false)
  const name = signal('-')
  return {
    visible,
    name
  }
}

const Button = createFunctionComponent(ButtonModule)
const Modal = createFunctionComponent(ModalModule)
const Input = createFunctionComponent(InputModule)
// tailwindcss
export const layout = (props: ModalProps): VirtualLayoutJSON => {
  const { visible, name } = useLogic<LogicReturn>()

  console.log('visible: ', visible(), name());

  return (
    <modalTest>
      <Button onClick={() => {
        visible(true)
      }}>显示 {name()}</Button>

      <input value={name} />

      <Input value={name} />

      {/* <Modal title="标题" onClose={() => visible(false)} >
        <p>
          name:
          <Input key="name" value={name} />
        </p>
      </Modal> */}

      { visible() ? (
        <Modal title="标题" onClose={() => visible(false)} >
          <p>
            name:
            <Input key="name" value={name} />
          </p>
        </Modal>
      ) : ''}
    </modalTest>
  );
}

interface CloseIconTree {
}
interface ButtonTree {
}

export interface LayoutTree {
  type: 'modalTest',
  children: []
}

export const designPattern = (props: ModalProps) => {

}

// css in js
export const styleRules = (props: ModalProps) => {
}
