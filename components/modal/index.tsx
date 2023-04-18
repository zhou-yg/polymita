import { h, PatternStructure, SignalProps, useLayout, useLogic, useModule, VirtualLayoutJSON } from '@polymita/renderer'
import CloseIcon from '../../icons/close'

import * as ButtonModule from '../button/index'

export interface ModalProps {
  children?: string
  title?: string
  onClose?: (e: any) => void
  onCancel?: (e: any) => void
  onOk?: (e: any) => void
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ModalProps) => {
  return {}
}

// tailwindcss
export const layout = (props: ModalProps): VirtualLayoutJSON => {
  const Button = useModule(ButtonModule)

  return (
    <modalBox
      className="block fixed left-0 top-0 w-full h-full" >
      <mask onClick={props.onClose} className="fixed top-0 left-0 w-full h-full opacity-70 bg-black"></mask>
      <modalBody
        className="block relative rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: '520px'  }} >
        <closeBox className="block absolute top-4 right-4 cursor-pointer" onClick={props.onClose} >
          <CloseIcon color="rgba(0,0,0,.45)" />
        </closeBox>

        <content className="block p-4" style={{ minHeight: '40px' }} >
          {props.title ? <contentTitle className="block mb-4 font-medium">{props.title}</contentTitle> : ''}
          {props.children}
        </content>

        <footer className="flex gap-2 p-4 flex-row-reverse" >
          <Button type="primary" onClick={(e) => props.onOk?.(e)}>确定</Button>
          <Button onClick={(e) => {
            props.onCancel?.(e)
            props.onClose?.(e)
          }}>取消</Button>
        </footer>
      </modalBody>
    </modalBox>
  )
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
