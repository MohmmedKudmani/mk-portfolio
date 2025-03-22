import { Text, Divider, Box } from "@mantine/core";
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  useMantineColorScheme,
} from "@mantine/core";
import useStyle from "./styleFooter";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons";
import logoDark from "../../public/svg/mk-logo-dark.svg";
import logoLight from "../../public/svg/mk-logo-light.svg";
import Image from "next/image";
import { useWindowScroll } from "@mantine/hooks";

function Footer() {
  const { classes } = useStyle();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <footer className={classes.footer}>
      <Divider />
      <Container px='xl' size='xl' className={classes.inner}>
        <Image
          src={dark ? logoDark : logoLight}
          width={60}
          height={60}
          alt='logo'
          style={{
            cursor: "pointer",
          }}
          onClick={() => scrollTo({ y: 0 })}
        />
        <Group spacing='xs' position='right' noWrap>
          <ActionIcon
            href='https://twitter.com/MohammedKudamni'
            target='_blank'
            component='a'
            className={classes.link}
            radius='xl'
            variant='transparent'
            size='lg'
          >
            <IconBrandTwitter size={24} />
          </ActionIcon>
          <ActionIcon
            href='https://github.com/MohmmedKudmani'
            target='_blank'
            component='a'
            className={classes.link}
            radius='xl'
            variant='transparent'
            size='lg'
          >
            <IconBrandGithub size={24} />
          </ActionIcon>
          <ActionIcon
            href='https://www.linkedin.com/in/mohmmed-kudmani-b64889212/'
            target='_blank'
            component='a'
            className={classes.link}
            radius='xl'
            variant='transparent'
            size='lg'
          >
            <IconBrandLinkedin size={24} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer;

