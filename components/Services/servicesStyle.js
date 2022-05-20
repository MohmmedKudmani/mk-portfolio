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
    image: {},
  }
})

export default useStyles
