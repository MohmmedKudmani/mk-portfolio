import {
  Button,
  Container,
  Group,
  Box,
  Title,
  Text,
  useMantineTheme,
  ActionIcon,
} from '@mantine/core'
import BackgroundAnimation from '../../lib/BackgroundAnimation'
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from '@tabler/icons'
import useStyle from './heroStyle'
import { Link } from 'react-scroll'
import { state } from '../../lib/state'
import { useSnapshot } from 'valtio'

function Home(props) {
  const { isFreelance, setFreelance } = props
  const theme = useMantineTheme()
  const { classes } = useStyle()
  const dark = theme.colorScheme === 'dark'
  const snap = useSnapshot(state)

  return (
    <Container id='home' pb='4rem' px='xl' size='xl'>
      <Group
        sx={{
          [`@media (max-width: 720px)`]: {
            marginBottom: '2rem',
          },
        }}
        spacing='lg'
        position='right'
      >
        <ActionIcon
          href='https://twitter.com/MohammedKudamni'
          target='_blank'
          component='a'
          radius='xl'
          variant='transparent'
          size='lg'
        >
          <IconBrandTwitter className={classes.icons} size='28px' />
        </ActionIcon>
        <ActionIcon
          href='https://github.com/MohmmedKudmani'
          target='_blank'
          component='a'
          radius='xl'
          variant='transparent'
          size='lg'
        >
          <IconBrandGithub className={classes.icons} size='28px' />
        </ActionIcon>
        <ActionIcon
          href='https://www.linkedin.com/in/mohmmed-kudmani-b64889212/'
          target='_blank'
          component='a'
          radius='xl'
          variant='transparent'
          size='lg'
        >
          <IconBrandLinkedin className={classes.icons} size='28px' />
        </ActionIcon>
        <Button
          onClick={() =>
            setFreelance((current) => (current === 'true' ? 'false' : 'true'))
          }
          variant='subtle'
          sx={{
            position: 'fixed',
            top: '2rem',
            zIndex: 999,
            marginRight: '3rem',
            '&:hover': {
              backgroundColor: 'transparent',
            },
            [`@media (max-width: 720px)`]: {
              display: snap.modelOpened ? 'block' : 'none',
              top: 'auto',
              bottom: '1rem',
              left: '0.7rem',
            },
          }}
          color='gray'
        >
          {isFreelance === 'true' ? 'Switch to Work' : 'Switch to Freelance'}
        </Button>
      </Group>
      <Group spacing='0' position='apart' noWrap direction='row'>
        <Box>
          <Text size='lg'>{"Hello, I'm"}</Text>
          <Title className={classes.title} my='sm'>
            Mohammed <br /> Kudmani
          </Title>
          {isFreelance === 'true' ? (
            <Text className={classes.aboutMe}>
              A freelance that specialized in static web app with a lot of
              features and services <br /> Dont be afraid to contact me if you
              have any questions.
            </Text>
          ) : (
            <Text className={classes.aboutMe}>
              An 18 years old from Jordan specialized in Frontend Web
              Development <br />
              with some backend Knowledge
            </Text>
          )}
          <Button
            className={classes.heroButton}
            mt='lg'
            radius='xl'
            size='xl'
            variant='filled'
            component={Link}
            duration={500}
            offset={-101}
            spy={true}
            smooth={true}
            to={isFreelance === 'true' ? 'contact' : 'My Projects'}
          >
            {isFreelance === 'true' ? 'Contact Me' : 'My Projects'}
          </Button>
        </Box>
        <Box
          sx={{
            width: '635px',
            marginLeft: '-4rem',
            [`@media (max-width: 720px)`]: {
              display: 'none',
            },
          }}
        >
          <BackgroundAnimation dark={dark} />
        </Box>
      </Group>
    </Container>
  )
}

export default Home
