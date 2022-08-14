import * as Dialog from '@radix-ui/react-dialog';
import { HeaderContainer, HeaderContent, NewTransectionButton } from './styles';

import logo from '../../assets/logo.svg'
import { NewTransectionModal } from '../NewTransectionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransectionButton>Nova transação</NewTransectionButton>
          </Dialog.Trigger>

          <NewTransectionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}