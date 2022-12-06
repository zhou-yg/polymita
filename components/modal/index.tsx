import { h, PatternStructure, SignalProps, useLayout, useLogic, useModule, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern, strokePattern, useInteractive } from '../../patterns'
import { action, after, signal } from 'atomic-signal'
import { colors } from '../../patterns/token'
import CloseIcon from '../../icons/close'

import * as ButtonModule from '../button/index'

export interface ModalProps {
  children?: string
  title?: string
  onClose?: (e: any) => void
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: SignalProps<ModalProps>) => {
}


// tailwindcss
export const layout = (props: ModalProps) => {
  const logic = useLogic<LogicReturn>()

  const Button = useModule(ButtonModule)

  return (
    <modalBox
      className="block fixed left-0 top-0 w-full h-full" >
      <mask className="fixed w-full h-full opacity-70 bg-black"></mask>
      <modalBody
        className="block relative rounded-lg bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: '520px'  }} >
        <closeBox className="block absolute top-4 right-4 cursor-pointer" onClick={props.onClose} >
          <CloseIcon color="rgba(0,0,0,.45)" />
        </closeBox>

        <content className="block p-6" style={{ minHeight: '40px' }} >
          {props.title ? <contentTitle className="block mb-4 font-medium">{props.title}</contentTitle> : ''}
          {props.children}
        </content>

        <footer className="flex gap-2 p-6 flex-row-reverse" >
          <Button type="primary">确定</Button>
          <Button>取消</Button>
        </footer>
      </modalBody>
    </modalBox>
  )
}

export const designPattern = (props: ModalProps) => {

}

// css in js
export const styleRules = (props: ModalProps) => {
}
