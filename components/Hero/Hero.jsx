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
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-scroll'

function Home() {
  const theme = useMantineTheme()
  const { classes } = useStyle()
  const dark = theme.colorScheme === 'dark'
  const matchXs = useMediaQuery('(min-width: 700px)')

  return (
    <Container id='home' pb='4rem' px='xl' size='xl'>
      <Group spacing='lg' position='right'>
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
      </Group>
      <Group spacing='0' position='apart' noWrap direction='row'>
        <Box>
          <Text size='lg'>{"Hello, I'm"}</Text>
          <Title className={classes.title} my='sm'>
            Mohammed <br /> Kudmani
          </Title>
          <Text className={classes.aboutMe}>
            A freelance that specialized in static web app with a lot of
            features and services <br /> Dont be afraid to contact me if you
            have any questions.
          </Text>
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
            to='contact'
          >
            Contact Me
          </Button>
        </Box>
        {matchXs && (
          <Box
            sx={{
              width: '635px',
              marginLeft: '-4rem',
            }}
          >
            <BackgroundAnimation dark={dark} />
          </Box>
        )}
      </Group>
    </Container>
  )
}

export default Home
