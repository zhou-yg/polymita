import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON, createFunctionComponent, isVirtualNode, classnames } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'
import * as TabPanelModule from './panel'
import { colors } from '../../patterns';

export const name = 'Tabs' as const
export let meta: {
  props: TabsProps,
  layoutStruct: TabsLayout
  patchCommands: []
}

export interface TabsProps {
  children?: VirtualLayoutJSON[]
  tabs?: string[]
  panels?: (VirtualLayoutJSON | any)[]
  defaultActiveTab?: string
}

export const propTypes = {
}

export const logic = (props: TabsProps) => {

  const activeTab = signal<string>(
    props.defaultActiveTab ||
    props.tabs?.[0] || 
    props.panels?.[0]?.props?.header ||
    props.children?.[0]?.props?.header
  );

  return {
    activeTab,
  }
}
type LogicReturn = ReturnType<typeof logic>

export type TabsLayout = {
  type: 'tabsContainer',
  children: [
  ]
}
const TabPanel = createFunctionComponent(TabPanelModule);
export const layout = (props: TabsProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>();
  const { children, tabs, panels } = props;
  console.log('children: ', children);

  if (children && panels) {
    throw new Error('[@polymita/tabs]: children and panels cannot be used at the same time');
  }
  const activeTab = logic.activeTab();

  let panelNodes = children
  if (panels) {
    panelNodes = tabs.map((tab, index) => {
      return (
        <TabPanel header={tab}>
          {panels[index]}
        </TabPanel>
      )
    })
  }

  const visiblePanelNodes = panelNodes?.map(node => {
    const isCurrent = node.props.header === activeTab;
    return {
      node,
      visible: isCurrent
    }
  })
  
  let headers = tabs;
  if (panelNodes) {
    headers = panelNodes?.map(node => {
      return node.props.header
    })
  }

  return (
    <tabsContainer className='block '>
      <tabHeaderBars className='block'>
        {headers.map(header => {
          const isCurrent = header === activeTab;
          const style = {
            color: isCurrent ? colors.primaries[1] : undefined,
            borderBottom: isCurrent ? `2px solid ${colors.primaries[1]}` : `2px solid transparent`,
          }
          return (
            <tabHeader 
              key={header}
              className='inline-block p-2 mr-4 cursor-pointer text-center' 
              style={style}
              onClick={() => {
                logic.activeTab(header);
              }}
            >
              {header}
            </tabHeader>
          );
        })}
        <tabHeaderBarLine className='h-[1px] block bg-slate-200' />
      </tabHeaderBars>
      <tabBody className='block'>
        {visiblePanelNodes?.map(item => {
          return (
            <tabBodyItem if={item.visible} className='block' >
              {item.node}
            </tabBodyItem>
          )
        })}
      </tabBody>
    </tabsContainer>
  )
}

export const styleRules = (props: TabsProps, layout: ConvertToLayoutTreeDraft<TabsLayout>) => {
  return [
  ]
}

export const designPattern = (props: TabsProps, layout: ConvertToLayoutTreeDraft<TabsLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
