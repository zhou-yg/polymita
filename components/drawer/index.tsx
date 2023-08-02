import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'
import CloseIcon from '../../icons/close'

export const name = 'Drawer' as const
export let meta: {
  props: DrawerProps,
  layoutStruct: DrawerLayout
  patchCommands: []
}

export interface DrawerProps {
  title?: string
  width?: number
  children?: any
  onClose?: () => void
  closable?: boolean
  extra?: VirtualLayoutJSON
}

export const propTypes = {
}

export const logic = (props: SignalProps<DrawerProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type DrawerLayout = {
  type: 'drawerContainer',
  children: [
  ]
}

export const layout = (props: DrawerProps) => {
  const { title, width = 600, children, onClose, closable, extra } = props
  const logic = useLogic<LogicReturn>() 
  return (
    <drawerContainer className="block fixed left-0 top-0 w-full h-full" >
      <drawerMask onClick={onClose} className="fixed top-0 left-0 w-full h-full opacity-70 bg-black" />
      <drawerBox className="block fixed top-0 right-0 h-full z-10 bg-white" style={{ width: `${width}px` }}>
        <drawerHeader className="flex items-center p-4 border-b" >
          {title}
          
          {closable ? (
            <closeBox className="block absolute top-4 right-4 cursor-pointer" onClick={onClose} >
              <CloseIcon color="rgba(0,0,0,.45)" />
            </closeBox>
          ) : ''}

          {extra || ''}
          
        </drawerHeader>
        <drawerBody className="block overflow-auto p-4">
          {children}
        </drawerBody>
      </drawerBox>
    </drawerContainer>
  )
}

export const styleRules = (props: DrawerProps, layout: ConvertToLayoutTreeDraft<DrawerLayout>) => {
  return [
  ]
}

export const designPattern = (props: DrawerProps, layout: ConvertToLayoutTreeDraft<DrawerLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
