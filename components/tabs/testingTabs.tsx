import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON, createFunctionComponent } from '@polymita/renderer';
import * as TabsModule from './index'
import * as PanelModule from './panel'
import "@polymita/renderer/jsx-runtime"

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

const Tabs = createFunctionComponent(TabsModule);
const TabPanel = createFunctionComponent(PanelModule);
export const layout = (props: TestingTabsProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  return (
    <tabsContainer>
      <Tabs>
        <TabPanel header='tab1'>
          内容1
        </TabPanel>
        <TabPanel header='tab2'>
          内容2
        </TabPanel>
      </Tabs>
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
