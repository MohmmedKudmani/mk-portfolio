import {
  Button,
  Container,
  Group,
  Box,
  Title,
  Text,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import BackgroundAnimation from "../../lib/BackgroundAnimation";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons";
import useStyle from "./heroStyle";
import { Link } from "react-scroll";

function Home(props) {
  const { isFreelance, setFreelance } = props;
  const theme = useMantineTheme();
  const { classes } = useStyle();
  const dark = theme.colorScheme === "dark";

  return (
    <Container id='home' pb='4rem' px='md' size='xl'>
      <Group
        sx={{
          [`@media (max-width: 720px)`]: {
            marginBottom: "2rem",
          },
        }}
        spacing='lg'
        position='right'
        mr={-8}
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
          href='https://www.linkedin.com/in/mohammed-kudmani-b64889212/'
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
          {isFreelance === "true" ? (
            <Text className={classes.aboutMe}>
              A freelance that specialized in static web app with a lot of
              features and services <br /> {"Don't"} be afraid to contact me if
              you have any questions.
            </Text>
          ) : (
            <Text className={classes.aboutMe}>
              A 21 years old from Jordan specialized in Frontend Web Development{" "}
              <br />
              with a lot of backend Knowledge
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
            to={isFreelance === "true" ? "contact" : "projects"}
          >
            {isFreelance === "true" ? "Contact Me" : "My Projects"}
          </Button>
        </Box>
        <Box
          sx={{
            width: "635px",
            marginLeft: "-4rem",
            [`@media (max-width: 980px)`]: {
              display: "none",
            },
          }}
        >
          <BackgroundAnimation dark={dark} />
        </Box>
      </Group>
    </Container>
  );
}

export default Home;

