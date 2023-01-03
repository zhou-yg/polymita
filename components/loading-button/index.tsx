import * as ButtonModule from '../button/index'
import Loading3Icon from '../../icons/loading3-quarters'
import { h, CommandOP, overrideModule } from 'tarat-renderer'

type BMT = typeof ButtonModule
type BMTKeys = keyof BMT

export interface LoadingButtonProps {
  loading?: boolean
}

const LoadingButton = overrideModule(ButtonModule, {
  layout(props: ButtonModule.ButtonProps & LoadingButtonProps, layout) {
    layout.buttonBox.span.props.className += ' flex justify-center items-center'
  },
  patchLayout(props: ButtonModule.ButtonProps & LoadingButtonProps, layout) {
    return [
      {
        op: CommandOP.addChild,
        condition: !!props.loading,
        parent: layout.buttonBox.span,
        child: (
          <Loading3Icon size={16} className="animate-spin align-middle ml-1" />
        )
      }
    ] as const
  }
})

export const meta = LoadingButton.meta
export const override = LoadingButton.override
export const layout = LoadingButton.layout
export const logic = LoadingButton.logic
export const designPattern = LoadingButton.designPattern
export const designPatterns = LoadingButton.designPatterns
export const styleRules = LoadingButton.styleRules
