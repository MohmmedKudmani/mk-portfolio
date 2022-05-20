import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'
  const primary = theme.colors.primary
  const orange = theme.colors.orange
  const textDark = theme.other.textDark
  const textLight = theme.other.textLight
  const backgroundDark = theme.other.backgroundDark
  const backgroundLight = theme.other.backgroundLight

  return {
    title: {
      fontSize: '3.5rem',
      color: orange[5],
      lineHeight: '3.5rem',
      [theme.fn.smallerThan('sm')]: {
        fontSize: '3rem',
        lineHeight: '3.2rem',
      },
    },
    icons: {
      color: orange[5],
      '&:hover': {
        color: theme.fn.rgba(orange[5], 0.6),
        transition: 'color 200ms ease',
      },
    },
    aboutMe: {
      color: dark ? textDark : textLight,
      [theme.fn.smallerThan('sm')]: {
        fontSize: '0.9rem',
      },
    },
    heroButton: {
      '.mantine-Button-label': {
        padding: '0.3rem 0.8rem',
      },
      border: `2px ${orange[5]} solid`,
    },
  }
})

export default useStyles
