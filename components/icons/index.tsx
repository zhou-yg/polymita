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
      <AccountBookFilled size={24} color="blue" type="outlined" />
      <LoadingIcon size={24} color="black" className='animate-spin' />
      <Loading3Icon size={24} color="black" className='animate-spin' />
      <CloseIcon size={24} color="black" />
      <CloseCircleIcon size={24} color="black" />
      <CloseSquareIcon size={24} color="black" />
      </row>
    </iconsBox>
  )
}
