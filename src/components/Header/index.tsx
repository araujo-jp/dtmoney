import * as Dialog from '@radix-ui/react-dialog';
import { HeaderContainer, HeaderContent, NewTransectionButton } from './styles';

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransectionButton>Nova transação</NewTransectionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>Nova Transação</Dialog.Title>

              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}