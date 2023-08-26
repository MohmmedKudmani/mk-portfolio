import { Text, Group } from '@mantine/core'
import useStyle from './headerStyle'
import { Link } from 'react-scroll'

function Links(props) {
  const { isNavbar, state } = props
  const { classes } = useStyle()

  const links = [
    { id: 0, label: 'Home', route: 'home' },
    { id: 1, label: 'Skills', route: 'skills' },
    { id: 2, label: 'Projects', route: 'projects' },
    { id: 3, label: 'Contact', route: 'contact' },
  ]

  return (
    <Group
      sx={{
        [`@media (max-width: 720px)`]: {
          display: isNavbar ? 'block' : 'none',
        },
      }}
      align='left'
      spacing='0'
      direction={isNavbar ? 'column' : 'row'}
    >
      {links.map((link) => (
        <Text
          key={link.id}
          className={classes.linkClass}
          sx={{
            '&:hover': {
              transform: isNavbar && 'scale(.98)',
            },
          }}
          size='lg'
        >
          <Link
            activeClass={
              isNavbar ? classes.linkActiveClassNavbar : classes.linkActiveClass
            }
            style={{
              display: 'block',
              padding: '0.8rem',
            }}
            duration={500}
            offset={-101}
            spy={true}
            smooth={true}
            to={link.route}
            onClick={() => {
              if (isNavbar) {
                state.modelOpened = false
              }
            }}
          >
            {link.label}
          </Link>
        </Text>
      ))}
    </Group>
  )
}

export default Links
