import { h, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { controlActivePattern } from '../../patterns'

export interface ButtonProps {
  children?: string
  type?: 'primary'
  onClick: (e: any) => void
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ButtonProps) => {
  return {
    interactive: {
      actionType: 'hover',
      disable: false,
      selected: true,
      active: true,
    },
    count: 0
  }
}

// tailwindcss
export const layout = (props: ButtonProps) => {
  const logicResult = useLogic<LogicReturn>()

  return (
    <buttonBox className="block bg-slate-400">
      <div className="block" onClick={props.onClick}>
        {props.children}
      </div>
    </buttonBox>
  )
}

export const designPattern = (props: ButtonProps) => {
  const logicResult = useLogic<LogicReturn>()
  const pattern = controlActivePattern(logicResult.interactive)

  return {
    ...pattern,
  }
}

// css in js
export const style = (props: ButtonProps) => {
  const logic = useLogic<LogicReturn>()
  const layout = useLayout()
  layout.buttonBox.div.props.style = {
    backgroundColor: logic.count > 0 ? 'red' : 'blue',
    display: 'inline-block'
  }
}
