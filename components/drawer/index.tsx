import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'Drawer' as const
export let meta: {
  props: DrawerProps,
  layoutStruct: DrawerLayout
  patchCommands: []
}

export interface DrawerProps {
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
  const logic = useLogic<LogicReturn>()
  return (
    <drawerContainer>
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
