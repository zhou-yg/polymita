import { createFunctionComponent, h, PatternStructure, SignalProps, useLayout, useLogic, VirtualLayoutJSON } from '@polymita/renderer'
import { Signal, after, signal } from '@polymita/signal'

import * as ButtonModule from '../button/index'
import * as ModalModule from '../modal/index'
import * as InputModule from '../input/index'
import { useState } from 'react'

export interface ModalProps {
  children?: string
  title?: string
  onClose?: (e: any) => void
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ModalProps) => {
  const [visible, setVisible] = useState(false)
  const [name, setName] = useState('-')
  return {
    visible,
    setVisible,
    name,
    setName,
  }
}

const Button = createFunctionComponent(ButtonModule)
const Modal = createFunctionComponent(ModalModule)
const Input = createFunctionComponent(InputModule)
// tailwindcss
export const layout = (props: ModalProps): VirtualLayoutJSON => {
  const { visible, name, setVisible, setName } = useLogic<LogicReturn>()

  return (
    <modalTest>
      <Button onClick={() => {
        setVisible(true)
      }}>显示 {name}</Button>

      <input value={name} />

      <Input value={name} onInput={(v: string) => setName(v)} />

      {/* <Modal title="标题" onClose={() => visible(false)} >
        <p>
          name:
          <Input key="name" value={name} />
        </p>
      </Modal> */}

      { visible ? (
        <Modal title="标题" onClose={() => setVisible(false)} >
          <p>
            name:
            <Input key="name" value={name} onInput={(v: string) => setName(v)} />
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
