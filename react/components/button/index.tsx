import * as ButtonModule from '../../../components/button'
import { RenderToReact } from '../../../shared/render'
import { NormalizeProps, SingleFileModule } from '@polymita/renderer'

const Button = RenderToReact<NormalizeProps<ButtonModule.ButtonProps>>({
  ...ButtonModule
} as unknown as SingleFileModule<ButtonModule.ButtonProps, any, [], 'Button'>)

export default Button
