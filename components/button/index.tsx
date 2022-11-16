import { h, useLogic } from 'tarat-renderer'

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

  const logicResult = useLogic<LogicReturn>()

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

export const designPattern = (props: ButtonProps) => {
}

// css in js
export const style = (props: ButtonProps) => {
  
}
