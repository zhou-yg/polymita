import { h, PatternStructure, SignalProps, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import { blockPattern, strokePattern, useInteractive } from '../../patterns'
import { action, after, signal } from 'atomic-signal'
import { colors } from '../../patterns/token'
import AccountBookFilled from '../../icons/account-book'


export interface ButtonProps {
  disabled?: boolean
  value: string | number
  onInput: (v: string | number) => void
  type: string
}

export const config = () => ({
  
})

type LogicReturn = ReturnType<typeof logic>

export const logic = (props: SignalProps<ButtonProps>) => {
  const interactive = useInteractive({
    disabled: props.disabled,
  })
  const value = signal(props.value())

  return {
    interactive,
    value,
  }
}


// tailwindcss
export const layout = (props: ButtonProps) => {
  const logic = useLogic<LogicReturn>()

  // const v = logicResult.interactive.actionType()
  // console.log('logicResult.interactive.actionType(): ', v, typeof v);

  return (
    <inputBox
      className="block"
      {...logic.interactive.events} >
      {AccountBookFilled({ size: 24, color: 'red', type: 'filled' })}
      <AccountBookFilled size={24} color="blue" type="outlined" />
      <input
        type={props.type}
        disabled={props.disabled}
        is-container has-decoration
        value={logic.value}
        className="block select-none outline-none border-0 px-2 py-1"
      />
    </inputBox>
  )
}

export const designPattern = (props: ButtonProps) => {
  const logic = useLogic<LogicReturn>()
  const p = strokePattern(
    {
      hover: logic.interactive.states.hover(),
      active: logic.interactive.states.active(),
      selected: logic.interactive.states.focus(),
      disabled: props.disabled,
    },
    {
      bdw: 1,
      border: [colors.grays[0],colors.primaries[1]],
    }
  )

  return p
}

// css in js
export const styleRules = (props: ButtonProps) => {
}
