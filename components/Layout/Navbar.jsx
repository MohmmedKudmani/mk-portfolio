import { Navbar as MantineNavbar, Text } from '@mantine/core'
import useStyle from './navbarStyle'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened, setModelOpened } = props
  const { classes, cx } = useStyle()
  const matchXs = useMediaQuery('(max-width: 601px)')

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
        <Links isNavbar setModelOpened={setModelOpened} />
      </MantineNavbar.Section>
    </MantineNavbar>
  )
}

export default Navbar
