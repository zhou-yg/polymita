import { h, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft, VirtualLayoutJSON, classnames } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'List' as const
export let meta: {
  props: ListProps,
  layoutStruct: ListLayout
  patchCommands: []
}

export interface ListProps<T = any> {
  list: Signal<T[]>
  render: (item: T, index: number) => VirtualLayoutJSON
  extra?: VirtualLayoutJSON | string | number
  border?: boolean
}

export const propTypes = {
  list: PropTypes.signal.isRequired,
}

export const logic = (props: SignalProps<ListProps>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type ListLayout = {
  type: 'listContainer',
  children: [
  ]
}
export const layout = <T,>(props: ListProps<T>): VirtualLayoutJSON => {
  const { border = true } = props
  const logic = useLogic<LogicReturn>()

  const ds = props.list();

  return (
    <listContainer className="block">
       {ds.map((item, index) => {
          const r = props.render(item, index)
          const key = (item as any)?.id ?? (item as any)?.key ?? (item as any)?.name ?? JSON.stringify(item)
          const cls = classnames('flex p-2 items-center', {
            'border-b': border,
          })
          return (
            <listItem className={cls} key={key}>
              <listContent className="flex-1 min-w-0">
                {r}
              </listContent>             
              <listExtra className="flex-none ml-2">
                {props.extra}
              </listExtra>
            </listItem>
          )
       })}
    </listContainer>
  )
}

export const styleRules = (props: ListProps, layout: ConvertToLayoutTreeDraft<ListLayout>) => {
  return [
  ]
}

export const designPattern = (props: ListProps, layout: ConvertToLayoutTreeDraft<ListLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
