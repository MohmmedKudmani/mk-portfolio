import { Text, Group } from '@mantine/core'
import useStyle from './headerStyle'
import { Link } from 'react-scroll'

function Links(props) {
  const { isNavbar, setModelOpened } = props
  const { classes } = useStyle()

  const links = [
    { id: 0, label: 'Home', route: 'home' },
    { id: 1, label: 'Services', route: 'services' },
    { id: 2, label: 'Projects', route: 'projects' },
    { id: 3, label: 'Contact', route: 'contact' },
  ]

  return (
    <Group align='left' spacing='5px' direction={isNavbar ? 'column' : 'row'}>
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
              isNavbar && setModelOpened.close()
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
