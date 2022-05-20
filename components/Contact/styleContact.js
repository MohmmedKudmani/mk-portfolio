import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {},

  title: {
    lineHeight: 1,
    color: theme.colors.orange[5],
    fontSize: '2.5rem',
  },

  description: {
    color:
      theme.colorScheme === 'dark'
        ? theme.other.textDark
        : theme.other.textLight,
    maxWidth: 300,
    fontSize: '0.9rem',

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: '100%',
    },
  },

  form: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.xl,
  },

  social: {
    color: theme.colors.orange[5],
    '&:hover': {
      color: theme.colors.orange[6],
      transition: 'color 200ms ease',
    },
    display: 'inline',
  },

  input: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.primary[7]
        : theme.colors.primary[0],
    borderColor: theme.colors.gray[5],
    '&::placeholder': {
      color: theme.colors.gray[5],
    },
    ':focus': {
      borderColor: theme.colors.orange[5],
    },
  },

  inputLabel: {},

  control: {
    backgroundColor: theme.colors.orange[5],
    '&:hover': {
      backgroundColor: theme.colors.orange[6],
    },
  },
}))

export default useStyles
