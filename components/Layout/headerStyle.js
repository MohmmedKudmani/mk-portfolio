import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    navbarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },

    linkClass: {
      fontWeight: 400,
      color: dark ? theme.white : theme.black,
      cursor: 'pointer',
      fontSize: '1.05rem',
    },

    linkActiveClass: {
      '&, &:hover': {
        color: theme.colors.orange[5],
      },
    },

    linkActiveClassNavbar: {
      backgroundColor: dark
        ? theme.fn.rgba(theme.colors.orange[6], 0.1)
        : theme.colors.orange[0],
      color: theme.colors.orange[5],
      borderRadius: '7px',
    },

    toggleDarkMode: {
      // backgroundColor: theme.colors.orange[dark ? 5 : 6],
      // '&:hover': {
      //   backgroundColor: theme.fn.rgba(theme.colors.orange[dark ? 5 : 6], 0.8),
      // },
      position: 'relative',
      '& *': {
        cursor: 'pointer',
      },
    },

    icon: {
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 1,
      top: 3,
    },

    iconLight: {
      left: 4,
      color: theme.white,
    },

    iconDark: {
      color: theme.colors.gray[6],
    },

    menuModal: {
      '.mantine-Modal-modal': {
        top: 20,
        padding: '1rem',
      },
    },
  }
})

export default useStyles
