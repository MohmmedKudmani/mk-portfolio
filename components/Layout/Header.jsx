import {
  Header as MantineHeader,
  Text,
  useMantineColorScheme,
  Burger,
  Container,
  Group,
  Switch,
} from '@mantine/core'
import useStyle from './headerStyle'
import { IconSun, IconMoon } from '@tabler/icons'
import Links from './Links'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'
import logoLight from '../../public/svg/mk-logo-light.svg'
import logoDark from '../../public/svg/mk-logo-dark.svg'
import Image from 'next/image'

function Header(props) {
  const { classes, cx } = useStyle()
  const { modelOpened, setModelOpened } = props
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const matchXs = useMediaQuery('(min-width: 600px)')
  const dark = colorScheme === 'dark'
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <MantineHeader
        sx={(theme) => ({
          boxShadow: scroll.y > 50 && theme.shadows.sm,
          border: 'none',
          backgroundColor: dark
            ? theme.other.backgroundDark
            : theme.other.backgroundLight,
        })}
        height={100}
      >
        <Container size='xl' className={classes.navbarContainer}>
          {!matchXs && (
            <Burger
              opened={modelOpened}
              onClick={() => setModelOpened.toggle()}
            />
          )}
          <Group spacing='1rem'>
            <Image
              src={dark ? logoDark : logoLight}
              width={60}
              height={60}
              alt='logo'
              style={{
                cursor: 'pointer',
              }}
              onClick={() => scrollTo({ y: 0 })}
            />
            {matchXs && <Links />}
          </Group>
          <LightDarkMode
            dark={dark}
            toggleColorScheme={toggleColorScheme}
            classes={classes}
            cx={cx}
            scroll={scroll}
          />
        </Container>
      </MantineHeader>
    </>
  )
}

function LightDarkMode({ classes, toggleColorScheme, dark, scroll, cx }) {
  return (
    <Group position='center' my={30}>
      <div className={classes.toggleDarkMode}>
        <IconSun className={cx(classes.icon, classes.iconLight)} size={18} />
        <IconMoon
          style={{
            right: scroll.y < 80 ? 12 : 4,
          }}
          className={cx(classes.icon, classes.iconDark)}
          size={18}
        />
        <Switch
          sx={(theme) => ({
            '.mantine-Switch-input': {
              backgroundColor: dark && theme.colors.orange[5],
            },
          })}
          checked={dark}
          color='orange'
          mr={scroll.y < 80 && '0.5rem'}
          onChange={() => toggleColorScheme()}
          size='md'
        />
      </div>
    </Group>
  )
}

export default Header
