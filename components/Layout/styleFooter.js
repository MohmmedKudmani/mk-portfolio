import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.other.backgroundDark
        : theme.other.backgroundLight,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
  link: {
    color: theme.colors.orange[5],
    '&:hover': {
      color: theme.fn.rgba(theme.colors.orange[5], 0.6),
      transition: 'color 200ms ease',
    },
  },
}))

export default useStyles
