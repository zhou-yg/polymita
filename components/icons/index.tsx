import { h, PatternStructure, SignalProps, useLayout, useLogic, VirtualLayoutJSON } from 'tarat-renderer'
import AccountBookFilled from '../../icons/account-book'
import LoadingIcon from '../../icons/loading'
import Loading3Icon from '../../icons/loading3-quarters'
import CloseIcon from '../../icons/close'
import CloseCircleIcon from '../../icons/close-circle'
import CloseSquareIcon from '../../icons/close-square'

export interface IconsProps {
}

// tailwindcss
export const layout = (props: IconsProps) => {

  return (
    <iconsBox
      className="block" >
      <row className="flex gap-2 flex-wrap" style={{ width: '400px' }} >
        <div className="m-2 flex flex-col align-center items-center">
          <AccountBookFilled size={24} color="blue" type="outlined" />
          <p className="mt-1">AccountBookFilled</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <LoadingIcon size={24} color="black" className='animate-spin' />
          <p className="mt-1">LoadingIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <Loading3Icon size={24} color="black" className='animate-spin' />
          <p className="mt-1">Loading3Icon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <CloseIcon size={24} color="black" />
          <p className="mt-1">CloseIcon</p>
        </div>        
        <div className="m-2 flex flex-col align-center items-center">
          <CloseSquareIcon size={24} color="black" />
          <p className="mt-1">CloseSquareIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <CloseCircleIcon size={24} color="black" />
          <p className="mt-1">CloseCircleIcon</p>
        </div>

      </row>
    </iconsBox>
  )
}
