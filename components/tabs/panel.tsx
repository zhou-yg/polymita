import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'TabPanel' as const
export let meta: {
  props: TabPanelProps,
  layoutStruct: TabPanelLayout
  patchCommands: []
}

export interface TabPanelProps {
  header: string
  children?: VirtualLayoutJSON[]
}

export const propTypes = {
}

export const logic = (props: SignalProps<TabPanelProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type TabPanelLayout = {
  type: 'tabsContainer',
  children: [
  ]
}
export const layout = (props: TabPanelProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  const { children } = props;
  return (
    <tabPanelContainer>
    </tabPanelContainer>
  )
}

export const styleRules = (props: TabPanelProps, layout: ConvertToLayoutTreeDraft<TabPanelLayout>) => {
  return [
  ]
}

export const designPattern = (props: TabPanelProps, layout: ConvertToLayoutTreeDraft<TabPanelLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
