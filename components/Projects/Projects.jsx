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
} from "@mantine/core";
import Image from "next/image";
import crypto_7 from "../../public/images/crypto-7.png";
import useStyles from "./projectsStyle";
import { IconBrandGithub, IconExternalLink, IconX } from "@tabler/icons";
import full_stack from "../../public/svg/full_stack.svg";
import hosting from "../../public/svg/hosting.svg";
import search_engine from "../../public/svg/search_engine.svg";
import speed_meter from "../../public/svg/speedometer-svgrepo-com.svg";
import dropflow from "../../public/images/dropflow.png";
import { useMediaQuery } from "@mantine/hooks";
import b2b_korea from "../../public/images/b2b-korea.png";

function Projects(props) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  const { isFreelance } = props;
  const matchXs = useMediaQuery("(max-width: 550px)");

  const highlightStyle = (theme) => ({
    backgroundColor: "transparent",
    color: theme.colors.orange[5],
    fontWeight: 400,
  });

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
              <Text className={classes.title}>B2B Korea</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon
                sx={{
                  backgroundColor: "transparent !important",
                  border: "none !important",
                }}
                variant='transparent'
                disabled
              >
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon
                component='a'
                href='https://b2b-korea.com'
                className={classes.projectIcon}
                target='_blank'
                variant='transparent'
              >
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          <Text mt='xs' mb='md' className={classes.description}>
            B2B Korea is a B2B directory that showcase suppliers and allows
            communication between buyers and supplier
            <Highlight
              mt='md'
              size='md'
              highlight='Astro, ShadCN, Tailwind CSS.'
              highlightStyles={highlightStyle}
            >
              The buyer web is built with Astro, ShadCN, Tailwind CSS.
            </Highlight>
            <Highlight
              size='md'
              highlight='React.js, ShadCN.'
              highlightStyles={highlightStyle}
            >
              The admin dashboard is built with React.js, ShadCN.
            </Highlight>
            <Highlight
              size='md'
              highlight='React.js, ShadCN.'
              highlightStyles={highlightStyle}
            >
              The supplier dashboard is built with React.js, ShadCN.
            </Highlight>
            <Highlight
              size='md'
              highlight='Hono.js, Drizzle, Postgres.'
              highlightStyles={highlightStyle}
            >
              The API is built with Hono.js, Drizzle, Postgres.
            </Highlight>
          </Text>
          <SimpleGrid spacing='lg' cols={2}>
            <Paper p='md' className={classes.features}>
              <Group mb='md' position='center'>
                <Image
                  src={search_engine}
                  width={35}
                  height={35}
                  alt='search_engine'
                />
                <Text>Search Engine</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Shows In Google</Text>
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
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Loads Under 1 Second</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Easy To Host</Text>
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
                <Text>Dynamic App</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Dynamic App</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col md={12} className={classes.imageOverlay}>
          <Image
            layout='responsive'
            width={590}
            height={387}
            objectFit='contain'
            src={b2b_korea}
            alt='b2b_korea'
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
      <Grid
        mb='9rem'
        mt='1rem'
        align='center'
        justify='space-between'
        columns={24}
        sx={{
          flexDirection: "row-reverse",
        }}
      >
        <Grid.Col p='0' md={11}>
          <Group align='center' position='apart'>
            <Box>
              <Text mb='5px' size='xs'>
                Featured Project
              </Text>
              <Text className={classes.title}>Dropflow</Text>
            </Box>
            <Group direction='column' spacing='10px'>
              <ActionIcon
                sx={{
                  backgroundColor: "transparent !important",
                  border: "none !important",
                }}
                variant='transparent'
                disabled
              >
                <IconBrandGithub size={30} />
              </ActionIcon>
              <ActionIcon
                component='a'
                href='https://www.dropflow.app'
                className={classes.projectIcon}
                target='_blank'
                variant='transparent'
              >
                <IconExternalLink size={30} />
              </ActionIcon>
            </Group>
          </Group>
          <Text mt='xs' mb='md' className={classes.description}>
            Dropflow is a service for dropshipping business owners to automate
            dropshipping to facebook marketplace.
            <Highlight
              mt='md'
              size='md'
              highlight='Astro, Tailwind CSS'
              highlightStyles={highlightStyle}
            >
              The Landing page is built with Astro, Tailwind CSS.
            </Highlight>
            <Highlight
              size='md'
              highlight='Nextjs, Mantine'
              highlightStyles={highlightStyle}
            >
              The Dashboard is built with Nextjs, Mantine.
            </Highlight>
          </Text>
          <SimpleGrid spacing='lg' cols={2}>
            <Paper p='md' className={classes.features}>
              <Group mb='md' position='center'>
                <Image
                  src={search_engine}
                  width={35}
                  height={35}
                  alt='search_engine'
                />
                <Text>Search Engine</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Shows In Google</Text>
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
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Loads Under 1 Second</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Easy To Host</Text>
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
                <Text>Dynamic App</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Dynamic App</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col md={12} className={classes.imageOverlay}>
          <Image
            layout='responsive'
            width={650}
            height={400}
            src={dropflow}
            alt='dropflow'
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
      <Grid mb='9rem' align='center' justify='space-between' columns={24}>
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
          {isFreelance === "true" ? (
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
              <Group mb='md' position='center'>
                <Image
                  src={search_engine}
                  width={35}
                  height={35}
                  alt='search_engine'
                />
                <Text>Search Engine</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Shows In Google</Text>
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
                {/* <Text color='yellow'>Moderate</Text> */}
                <Text color='green'>Loads Under 1 Second</Text>
              </Group>
            </Paper>
            <Paper p='md' className={classes.features}>
              <Group mb='sm' position='center'>
                <Image src={hosting} width={35} height={35} alt='hosting' />
                <Text>Hosting</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Easy To Host</Text>
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
                <Text>Dynamic App</Text>
              </Group>
              <Group position='center'>
                <Text color='green'>Dynamic App</Text>
              </Group>
            </Paper>
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col md={12} className={classes.imageOverlay}>
          <Image
            layout='responsive'
            objectFit='contain'
            width={595}
            height={400}
            src={crypto_7}
            alt='crypto_7'
            className={classes.image}
          />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Projects;

