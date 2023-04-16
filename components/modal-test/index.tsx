import { h, PatternStructure, SignalProps, useLayout, useLogic, useModule, VirtualLayoutJSON } from '@polymita/renderer'
import { Signal, after, signal } from '@polymita/signal'

import * as ButtonModule from '../button/index'
import * as ModalModule from '../modal/index'

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
  return {
    visible
  }
}

// tailwindcss
export const layout = (props: ModalProps): VirtualLayoutJSON => {
  const { visible } = useLogic<LogicReturn>()
  const Button = useModule(ButtonModule)
  const Modal = useModule(ModalModule)

  console.log('visible: ', visible());

  return (
    <div>
      <Button onClick={() => {
        visible(true)
      }}>显示</Button>


      { visible() ? <Modal title="标题" onClose={() => visible(false)} >{props.children}</Modal> : ''}
    </div>
  );
}

interface CloseIconTree {
}
interface ButtonTree {
}

export interface LayoutTree {
  type: 'modalBox',
  children: [
    {
      type: 'mask'
    },
    {
      type: 'modalBody',
      children: [
        {
          type: 'closeBox',
          children: [
            CloseIconTree,
          ]
        },
        {
          type: 'content',
        },
        {
          type: 'footer',
          children: [
            ButtonTree,
            ButtonTree,
          ]
        }
      ]
    }
  ]
}

export const designPattern = (props: ModalProps) => {

}

// css in js
export const styleRules = (props: ModalProps) => {
}
