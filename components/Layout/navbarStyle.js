import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    linkClass: {
      '&:hover': {
        opacity: '0.9',
      },
      fontWeight: 500,
      color: dark ? theme.white : theme.black,
      display: 'block',
      padding: '0.5rem 1rem',
    },

    linkActiveClass: {
      borderRadius: '0.5rem',
    },
  }
})

export default useStyles
