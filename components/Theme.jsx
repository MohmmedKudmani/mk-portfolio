import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import NextNProgress from 'nextjs-progressbar'

function Theme(props) {
  const { children } = props

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const dark = colorScheme === 'dark'

  const primary = [
    '#F0F0F5',
    '#D4D6E2',
    '#B9BCD0',
    '#9DA1BD',
    '#8287AB',
    '#676C98',
    '#52577A',
    '#3E415B',
    '#292B3D',
    '#15161E',
  ]

  const secondary = [
    '#FFF5E6',
    '#FEE4B8',
    '#FED28B',
    '#FDC15E',
    '#FCAF31',
    '#FC9E03',
    '#C97E03',
    '#975F02',
    '#653F01',
    '#322001',
  ]

  const darkColors = [
    '#ffffff',
    '#A6A7AB',
    '#909296',
    '#5c5f66',
    '#373A40',
    '#2C2E33',
    '#25262b',
    '#1A1B1E',
    '#141517',
    '#101113',
  ]

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colors: {
            primary,
            orange: secondary,
            dark: darkColors,
          },
          fontFamily: 'Poppins, sans-serif',
          headings: { fontFamily: 'Poppins, sans-serif' },
          colorScheme,
          primaryColor: 'primary',
          breakpoints: {
            xs: 510,
            sm: 900,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
          other: {
            backgroundDark: '#232534',
            backgroundLight: '#fdfdfd ',
            textDark: '#7E7FAF',
            textLight: '#4E507E',
          },
          shadows: {
            xl: '0px 0px 7px 4px rgba(0,0,0,0.1)',
          },
          primaryShade: { light: 6, dark: 6 },
        }}
      >
        <NotificationsProvider autoClose={2000} position='bottom-left'>
          {children}
          <NextNProgress
            color={primary[6]}
            height={3}
            options={{ showSpinner: false }}
          />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Theme
