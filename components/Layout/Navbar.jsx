import { Navbar as MantineNavbar } from '@mantine/core'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened, state } = props
  const matchXs = useMediaQuery('(max-width: 720px)')

  return (
    <MantineNavbar
      p='md'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.other.backgroundDark
            : theme.other.backgroundLight,
        display: matchXs ? 'block' : 'none',
      })}
      hidden={!modelOpened}
    >
      <MantineNavbar.Section grow>
        <Links isNavbar state={state} />
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
