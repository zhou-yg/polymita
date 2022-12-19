import * as ButtonModule from '../button/index'
import Loading3Icon from '../../icons/loading3-quarters'

import { h, CommandOP, extendModule } from 'tarat-renderer'

type BMT = typeof ButtonModule
type BMTKeys = keyof BMT
 
const LoadingButton = extendModule(ButtonModule, () => ({
  layout(props, layout) {
    layout.buttonBox.span.props.className += ' flex justify-center items-center'
  },
  patchLayout(props, layout) {
    
    return [
      {
        op: CommandOP.addChild,
        parent: layout.buttonBox.span,
        child: <Loading3Icon size={16} className='animate-spin align-middle ml-1' />
      }
    ] as const
  },
}))


export const meta = LoadingButton.meta
export const layout = LoadingButton.layout
export const logic = LoadingButton.logic
export const designPattern = LoadingButton.designPattern
export const styleRules = LoadingButton.styleRules
export const override = LoadingButton.override
