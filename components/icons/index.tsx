import { h, VirtualLayoutJSON } from '@polymita/renderer'
import AccountBookFilled from '../../icons/account-book'
import LoadingIcon from '../../icons/loading'
import Loading3Icon from '../../icons/loading3-quarters'
import CloseIcon from '../../icons/close'
import CloseCircleIcon from '../../icons/close-circle'
import CloseSquareIcon from '../../icons/close-square'
import CheckIcon from '../../icons/check'
import CheckCircleIcon from '../../icons/check-circle'
import CheckSquareIcon from '../../icons/check-square'
import ReloadIcon from '../../icons/reload'
import PlusCircleIcon from '../../icons/plus-circle'
import PlusSquareIcon from '../../icons/plus-square'
import PlusIcon from '../../icons/plus'


export interface IconsProps {
}

// tailwindcss
export const layout = (props: IconsProps): VirtualLayoutJSON => {

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
        <div className="m-2 flex flex-col align-center items-center">
          <CheckIcon size={24} color="black" />
          <p className="mt-1">CheckIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <CheckCircleIcon size={24} color="black" />
          <p className="mt-1">CheckCircleIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <CheckSquareIcon size={24} color="black" />
          <p className="mt-1">CheckSquareIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <ReloadIcon size={24} color="black" />
          <p className="mt-1">ReloadIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <PlusCircleIcon size={24} color="black" />
          <p className="mt-1">PlusCircleIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <PlusSquareIcon size={24} color="black" />
          <p className="mt-1">PlusSquareIcon</p>
        </div>
        <div className="m-2 flex flex-col align-center items-center">
          <PlusIcon size={24} color="black" />
          <p className="mt-1">PlusIcon</p>
        </div>
      </row>
    </iconsBox>
  )
}
