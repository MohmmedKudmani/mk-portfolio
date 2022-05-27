import {
  Container,
  Group,
  Box,
  Text,
  SimpleGrid,
  Paper,
  Grid,
  ActionIcon,
  useMantineTheme,
  Highlight,
} from '@mantine/core'
import Image from 'next/image'
import crypto_7 from '../../public/images/crypto-7.png'
import useStyles from './projectsStyle'
import { IconBrandGithub, IconExternalLink, IconX } from '@tabler/icons'
import full_stack from '../../public/svg/full_stack.svg'
import hosting from '../../public/svg/hosting.svg'
import search_engine from '../../public/svg/search_engine.svg'
import speed_meter from '../../public/svg/speedometer-svgrepo-com.svg'
import mk_blog from '../../public/images/mk-blog.png'
import mk_portfolio from '../../public/images/mk-portfolio.png'
import { showNotification } from '@mantine/notifications'

function Projects(props) {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const { isFreelance } = props

  const highlightStyle = (theme) => ({
    backgroundColor: 'transparent',
    color: theme.colors.orange[5],
    fontWeight: 400,
  })

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
                href='https://github.com/MohmmedKudmani/mk-portfolio'
                target='_blank'
                variant='transparent'
              >
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon
                onClick={() =>
                  showNotification({
                    title: 'You are Already In the Project :)',
                    icon: <IconX />,
                    color: 'red',
                  })
                }
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          <Text mt='xs' mb='md' className={classes.description}>
            {isFreelance === 'true' ? (
              <Highlight
                size='md'
                highlight='Portfolios & landingPages.'
                highlightStyles={highlightStyle}
              >
                There is no data just a basic static app this package will be
                great for Portfolios & landingPages.
              </Highlight>
            ) : (
              <Highlight
                size='md'
                highlight='Next.js as framework, Mantine as UI.'
                highlightStyles={highlightStyle}
              >
                Simple static web app, have a Modern and Responsive design, it
                uses Next.js as framework, Mantine as UI.
              </Highlight>
            )}
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
                <Text>Status:</Text>
                <Text color='green'>Great SEO</Text>
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
                <Text>Status:</Text>
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Great Speed</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting Price</Text>
              </Group>
              <Group position='center'>
                <Text>Status:</Text>
                <Text color='green'>Cheap Hosting</Text>
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
                <Text>Status:</Text>
                <Text color='red'>No Dynamic</Text>
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
              <Text className={classes.title}>crypto-7</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon
                component='a'
                target='_blank'
                href='https://github.com/MohmmedKudmani/crypto-7'
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon
                component='a'
                href='https://crypto-7.vercel.app/'
                target='_blank'
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          {isFreelance === 'true' ? (
            <Highlight
              mt='xs'
              mb='md'
              size='md'
              className={classes.description}
              highlight='apps that needs an api data.'
              highlightStyles={highlightStyle}
            >
              Important data will be generated in the build process, not
              Important data will be generated on the fly with a loading
              indicator this package will be great for apps that needs an api
              data.
            </Highlight>
          ) : (
            <Highlight
              mt='xs'
              mb='md'
              size='md'
              className={classes.description}
              highlight='Next.js, SSG,
              CSR, ReactQuery, Valtio, Mantine.'
              highlightStyles={highlightStyle}
            >
              Static Web App with api.coingecko.com Data, it uses Next.js, SSG,
              CSR, ReactQuery, Valtio, Mantine.
            </Highlight>
          )}
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
                <Text>Status:</Text>
                <Text color={theme.colors.orange[5]}>Moderate SEO</Text>
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
                <Text>Status:</Text>
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color={theme.colors.orange[5]}>Moderate Speed</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting Price</Text>
              </Group>
              <Group position='center'>
                <Text>Status:</Text>
                <Text color='green'>Cheap Hosting</Text>
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
                <Text>Status:</Text>
                <Text color={theme.colors.orange[5]}>Moderate Dynamic</Text>
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
              <Text className={classes.title}>mk-blog</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon
                component='a'
                target='_blank'
                href='https://github.com/MohmmedKudmani/mk-blog'
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon
                component='a'
                target='_blank'
                href='https://mk-blog.vercel.app/'
                className={classes.projectIcon}
                variant='transparent'
              >
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          {isFreelance === 'true' ? (
            <Highlight
              mt='xs'
              mb='md'
              size='md'
              className={classes.description}
              highlight='any app
              that needs static Data with some features like login users,
              comments.'
              highlightStyles={highlightStyle}
            >
              Data will be generated in the build process, the App will have a
              simple backend code, so this package will be great for any app
              that needs static Data with some features like login users,
              comments.
            </Highlight>
          ) : (
            <Highlight
              mt='xs'
              mb='md'
              size='md'
              className={classes.description}
              highlight='Next.js, SSG, CSR, ReactQuery,
              Valtio, Mantine, NextAuth, Mongodb.'
              highlightStyles={highlightStyle}
            >
              Static Blog with simple backend API for futures like
              Authentication and Comments, it uses Next.js, SSG, CSR,
              ReactQuery, Valtio, Mantine, NextAuth, Mongodb.
            </Highlight>
          )}
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
                <Text>Status:</Text>
                <Text color='green'>Great SEO</Text>
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
                <Text>Status:</Text>
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Great Speed</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group position='center' mb='sm'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting Price</Text>
              </Group>
              <Group position='center'>
                <Text>Status:</Text>
                <Text color='red'>Expensive Hosting</Text>
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
                <Text>Status:</Text>
                <Text color='green'>Great Dynamic</Text>
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
