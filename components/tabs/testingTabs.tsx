import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'TestingTabs' as const
export let meta: {
  props: TestingTabsProps,
  layoutStruct: TestingTabsLayout
  patchCommands: []
}

export interface TestingTabsProps {
}

export const propTypes = {
}

export const logic = (props: SignalProps<TestingTabsProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type TestingTabsLayout = {
  type: 'tabsContainer',
  children: [
  ]
}
export const layout = (props: TestingTabsProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  return (
    <tabsContainer>
       
    </tabsContainer>
  )
}

export const styleRules = (props: TestingTabsProps, layout: ConvertToLayoutTreeDraft<TestingTabsLayout>) => {
  return [
  ]
}

export const designPattern = (props: TestingTabsProps, layout: ConvertToLayoutTreeDraft<TestingTabsLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
