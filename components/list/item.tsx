import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON } from '@polymita/renderer';

export const name = 'ListItem' as const
export let meta: {
  props: ListItemProps,
  layoutStruct: ListItemLayout
  patchCommands: []
}

export interface ListItemProps {
  extra?: VirtualLayoutJSON | string | number
  children?: VirtualLayoutJSON | string | number
}

export const propTypes = {
}

export const logic = (props: SignalProps<ListItemProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type ListItemLayout = {
  type: 'listContainer',
  children: [
  ]
}
export const layout = (props: ListItemProps): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  return (
    <listItemContainer className='flex'>
      <listItemContent className='flex-1 min-w-0'>
        {props.children}
      </listItemContent>
      <listItemExtra if={!!props.extra} className='flex-none ml-2'>
        {props.extra}
      </listItemExtra>
    </listItemContainer>
  )
}

export const styleRules = (props: ListItemProps, layout: ConvertToLayoutTreeDraft<ListItemLayout>) => {
  return [
  ]
}

export const designPattern = (props: ListItemProps, layout: ConvertToLayoutTreeDraft<ListItemLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
