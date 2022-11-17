import { h, useLayout, useLogic } from 'tarat-renderer'

export interface ButtonProps {
  children?: string;
  type?: 'primary';
  onClick: (e: Event) => void
}

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: ButtonProps) => {
  return {
    count: 0,
  }
}

// tailwindcss
export const layout = (props: ButtonProps) => {

  const logicResult = useLogic<LogicReturn>();

  return (
    <buttonBox className="block">
      <button
        className="block"
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </buttonBox>
  )
}

// css in js
export const style = (props: ButtonProps) => {
  const logic = useLogic<LogicReturn>()
  const layout = useLayout()
  layout.buttonBox.style({
    backgroundColor: logic.count > 0 ? 'red' : 'blue',
  })
}

export const designPattern = (props: ButtonProps) => {
  return {
    containerBg: ['red'],
    bdc:['blue'],
    ts: ['12px', '18px'],
    tc: ['red', 'blue'],
  }
}