import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

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
  const { title, width = 600, children } = props
  const logic = useLogic<LogicReturn>() 
  return (
    <drawerContainer className="block fixed top-0 right-0 h-full" style={{ width: `${width}px` }}>
      <drawerHeader className="flex items-center p-4 border-bottom" >
        {title}
      </drawerHeader>
      <drawerBody className="overflow-auto">
        {children}
      </drawerBody>
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
