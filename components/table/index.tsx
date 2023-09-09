import { h, VirtualLayoutJSON, SignalProps, PropTypes, useLogic, ConvertToLayoutTreeDraft } from '@polymita/renderer';
import { after, Signal, signal } from '@polymita/signal'

export const name = 'Table' as const
export let meta: {
  props: TableProps<any>,
  layoutStruct: TableLayout
  patchCommands: []
}

export interface TableProps<T> {
  rowKey: string
  columns: { title: string, dataIndex?: string }[]
  dataSource: Signal<T[]>
}

export const propTypes = {
}

export const logic = <T,>(props: SignalProps<TableProps<T>>) => {
  return {
  }
}
type LogicReturn = ReturnType<typeof logic>

export type TableLayout = {
  type: 'tableContainer',
  children: [
  ]
}
export const layout = <T,>(props: TableProps<T>): VirtualLayoutJSON => {
  const logic = useLogic<LogicReturn>()
  const { rowKey, columns, dataSource } = props;
  return (
    <tableContainer className="block">
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.title} className="border-b">{column.title}</th>
            ))}
          </tr> 
        </thead>
        <tbody>
          {dataSource().map((item, index) => {
            return (
              <tr key={index + item[rowKey]} className="border-b">
                {columns.map((column) => (
                  <td key={item[rowKey] + column.title} className="border-b">{item[column.dataIndex]}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </tableContainer>
  )
}

export const styleRules = <T,>(props: TableProps<T>, layout: ConvertToLayoutTreeDraft<TableLayout>) => {
  return [
  ]
}

export const designPattern = <T,>(props: TableProps<T>, layout: ConvertToLayoutTreeDraft<TableLayout>) => {
  const logic = useLogic<LogicReturn>()
  return {}
}
