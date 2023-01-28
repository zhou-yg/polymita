import { h, CommandOP, overrideModule } from '@polymita/renderer'
import * as LoadingButton from '../loading-button/index'

const m = overrideModule(LoadingButton, {
  patchLayout(props, layout, types) {
    
  },
})

