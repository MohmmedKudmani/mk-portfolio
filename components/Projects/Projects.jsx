import {
  Container,
  Group,
  Box,
  Text,
  SimpleGrid,
  Paper,
  Grid,
  ActionIcon,
} from '@mantine/core'
import Image from 'next/image'
import crypto_7 from '../../public/images/crypto-7.png'
import useStyles from './projectsStyle'
import { IconBrandGithub, IconExternalLink } from '@tabler/icons'
import full_stack from '../../public/svg/full_stack.svg'
import hosting from '../../public/svg/hosting.svg'
import search_engine from '../../public/svg/search_engine.svg'
import speed_meter from '../../public/svg/speedometer-svgrepo-com.svg'
import { useMediaQuery } from '@mantine/hooks'
import mk_blog from '../../public/images/mk-blog.png'
import mk_portfolio from '../../public/images/mk-portfolio.png'

function Projects() {
  const { classes } = useStyles()
  const matchXl = useMediaQuery('(max-width: 1100px)')

  return (
    <Container id='projects' px='xl' size='xl'>
      <Grid
        mb='9rem'
        mt='1rem'
        align='center'
        justify='space-between'
        columns={24}
      >
        <Grid.Col p='0' md={11}>
          <Group align='center' position='apart'>
            <Box>
              <Text mb='5px' size='xs'>
                Featured Project
              </Text>
              <Text className={classes.title}>mk-portfolio</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon
                component='a'
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon
                component='a'
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          <Text mt='xs' mb='md' className={classes.description}>
            all data will be generated with the web App so anyone enter the web
            app will see the pre generated data and it can be updated be restart
            the build processes.
          </Text>
          <SimpleGrid spacing='lg' cols={2}>
            <Paper p='md' className={classes.features}>
              <Group mb='md' noWrap position='center'>
                <Image
                  src={search_engine}
                  width={35}
                  height={35}
                  alt='search_engine'
                />
                <Text>Search Engine</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group position='center' mb='sm'>
                <Image
                  src={speed_meter}
                  width={40}
                  height={40}
                  alt='speed_meter'
                />
                <Text>App Speed</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting Price</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image
                  src={full_stack}
                  width={35}
                  height={35}
                  alt='full_stack'
                />
                <Text>Dynamic</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='red'>Bad</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col md={12} className={classes.imageOverlay}>
          <Image
            layout='responsive'
            width={650}
            height={400}
            src={mk_portfolio}
            alt='mk_portfolio'
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
      <Grid
        sx={{
          flexDirection: 'row-reverse',
        }}
        mb='9rem'
        align='center'
        justify='space-between'
        columns={24}
      >
        <Grid.Col p='0' md={11}>
          <Group align='center' position='apart'>
            <Box>
              <Text mb='5px' size='xs'>
                Featured Project
              </Text>
              <Text className={classes.title}>mk-portfolio</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon className={classes.projectIcon} variant='transparent'>
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon className={classes.projectIcon} variant='transparent'>
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          <Text mt='xs' mb='md' className={classes.description}>
            all data will be generated with the web App so anyone enter the web
            app will see the pre generated data and it can be updated be restart
            the build processes.
          </Text>
          <SimpleGrid spacing='lg' cols={2}>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center' align='center'>
                <Image
                  src={search_engine}
                  width={35}
                  height={35}
                  alt='search_engine'
                />
                <Text>Search Engine</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image
                  src={speed_meter}
                  width={40}
                  height={40}
                  alt='speed_meter'
                />
                <Text>App Speed</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting Price</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image
                  src={full_stack}
                  width={35}
                  height={35}
                  alt='full_stack'
                />
                <Text>Dynamic</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='red'>Bad</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col md={12} className={classes.imageOverlay}>
          <Image
            layout='responsive'
            width={650}
            height={400}
            src={crypto_7}
            alt='crypto_7'
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
      <Grid mb='1rem' align='center' justify='space-between' columns={24}>
        <Grid.Col p='0' md={11}>
          <Group align='center' position='apart'>
            <Box>
              <Text mb='5px' size='xs'>
                Featured Project
              </Text>
              <Text className={classes.title}>mk-portfolio</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon className={classes.projectIcon} variant='transparent'>
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon className={classes.projectIcon} variant='transparent'>
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          <Text mt='xs' mb='md' className={classes.description}>
            all data will be generated with the web App so anyone enter the web
            app will see the pre generated data and it can be updated be restart
            the build processes.
          </Text>
          <SimpleGrid spacing='lg' cols={2}>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center' align='center'>
                <Image
                  src={search_engine}
                  width={35}
                  height={35}
                  alt='search_engine'
                />
                <Text>Search Engine</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group position='center' mb='sm'>
                <Image
                  src={speed_meter}
                  width={40}
                  height={40}
                  alt='speed_meter'
                />
                <Text>App Speed</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group position='center' mb='sm'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting Price</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='green'>Very Good</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group position='center' mb='sm'>
                <Image
                  src={full_stack}
                  width={35}
                  height={35}
                  alt='full_stack'
                />
                <Text>Dynamic</Text>
              </Group>
              <Group position='center'>
                <Text>Score:</Text>
                <Text color='red'>Bad</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col md={12} className={classes.imageOverlay}>
          <Image
            layout='responsive'
            width={650}
            height={400}
            src={mk_blog}
            alt='mk_blog'
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default Projects
