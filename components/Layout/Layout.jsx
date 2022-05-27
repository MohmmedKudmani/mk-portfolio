import Header from './Header'
import Theme from '../Theme'
import { AppShell } from '@mantine/core'
import Navbar from './Navbar'
import { useDisclosure } from '@mantine/hooks'
import GlobalStyles from '../GlobalStyles'
import Footer from './Footer'
import { state } from '../../lib/state'
import { useSnapshot } from 'valtio'

function Layout(props) {
  const { children } = props
  const { modelOpened } = useSnapshot(state)

  return (
    <Theme>
      <AppShell
        sx={(theme) => ({
          '.mantine-AppShell-main': {
            padding: '0',
          },
          '.mantine-AppShell-body': {
            paddingTop: '100px', // header height value
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.other.backgroundDark
                : theme.other.backgroundLight,
          },
        })}
        header={<Header modelOpened={modelOpened} state={state} />}
        fixed
        footer={<Footer />}
        navbar={<Navbar modelOpened={modelOpened} state={state} />}
      >
        {children}
        <GlobalStyles modelOpened={modelOpened} />
      </AppShell>
    </Theme>
  )
}

export default Layout
