import { Container, SimpleGrid, Box, Text, ThemeIcon } from '@mantine/core'
import Image from 'next/image'
import ads from '../../public/svg/digital-ads.svg'
import front_end from '../../public/svg/front-end.svg'
import hosting from '../../public/svg/hosting.svg'
import search_engine from '../../public/svg/search_engine.svg'
import clean_code from '../../public/svg/clean_code.svg'
import useStyle from './servicesStyle'
import { IconBrightnessHalf } from '@tabler/icons'

function Services() {
  const { classes } = useStyle()
  return (
    <Container id='services' pb='7rem' px='xl' size='xl'>
      <SimpleGrid
        spacing='4rem'
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 700, cols: 1, spacing: '3rem' },
        ]}
        cols={3}
      >
        <Box>
          <ThemeIcon
            sx={(theme) => ({
              backgroundColor: theme.fn.rgba(theme.colors.orange[5], 0.2),
            })}
            size='3.5rem'
            radius='xl'
            variant='filled'
          >
            <Image priority width={28} height={28} alt='ads' src={front_end} />
          </ThemeIcon>
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.fn.lighten(theme.other.textDark, 0.2)
                  : theme.fn.darken(theme.other.textLight, 1),
            })}
            weight='lighter'
            mt='sm'
            size='xs'
          >
            Feature
          </Text>
          <Text
            sx={{
              lineHeight: 1,
            }}
            weight='bold'
            size='lg'
            mb='sm'
          >
            Modern Design
          </Text>
          <Text size='sm'>
            I can Handle any design you want with Modern look and Responsive to
            all devices with a lot of features.
          </Text>
        </Box>
        <Box>
          <ThemeIcon
            pl='1px'
            sx={(theme) => ({
              backgroundColor: theme.fn.rgba(theme.colors.orange[5], 0.2),
            })}
            size='3.5rem'
            radius='xl'
            variant='filled'
          >
            <Image priority width={30} height={30} alt='ads' src={clean_code} />
          </ThemeIcon>
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.fn.lighten(theme.other.textDark, 0.2)
                  : theme.fn.darken(theme.other.textLight, 1),
            })}
            weight='lighter'
            mt='sm'
            size='xs'
          >
            Feature
          </Text>
          <Text
            sx={{
              lineHeight: 1,
            }}
            mb='sm'
            weight='bold'
            size='lg'
          >
            Clean & Editable Code
          </Text>
          <Text size='sm'>
            I write Clean Code, anyone knows react or next.js can edit the code
            with ease and a good folder structure.
          </Text>
        </Box>
        <Box>
          <ThemeIcon
            sx={(theme) => ({
              backgroundColor: theme.fn.rgba(theme.colors.orange[5], 0.2),
              color: theme.colors.orange[5],
            })}
            size='3.5rem'
            radius='xl'
            variant='filled'
          >
            <IconBrightnessHalf size={30} />
          </ThemeIcon>
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.fn.lighten(theme.other.textDark, 0.2)
                  : theme.fn.darken(theme.other.textLight, 1),
            })}
            weight='lighter'
            mt='sm'
            size='xs'
          >
            Feature
          </Text>
          <Text
            sx={{
              lineHeight: 1,
            }}
            mb='sm'
            weight='bold'
            size='lg'
          >
            Dark & Light Mode
          </Text>
          <Text size='sm'>
            All my web apps will have Dark & Light Mode even if your design{' '}
            {"doesn't"} have it.
          </Text>
        </Box>
        <Box>
          <ThemeIcon
            pl='1px'
            sx={(theme) => ({
              backgroundColor: theme.fn.rgba(theme.colors.orange[5], 0.2),
            })}
            size='3.5rem'
            radius='xl'
            variant='filled'
          >
            <Image width={30} height={30} alt='ads' src={hosting} />
          </ThemeIcon>
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.fn.lighten(theme.other.textDark, 0.2)
                  : theme.fn.darken(theme.other.textLight, 1),
            })}
            weight='lighter'
            mt='sm'
            size='xs'
          >
            Service
          </Text>
          <Text
            sx={{
              lineHeight: 1,
            }}
            mb='sm'
            weight='bold'
            size='lg'
          >
            Hosting
          </Text>
          <Text size='sm'>
            I Can Help you mange your hosting from picking a Domain name to host
            it on a Server.
          </Text>
        </Box>
        <Box>
          <ThemeIcon
            sx={(theme) => ({
              backgroundColor: theme.fn.rgba(theme.colors.orange[5], 0.2),
            })}
            size='3.5rem'
            radius='xl'
            variant='filled'
          >
            <Image width={30} height={30} alt='ads' src={search_engine} />
          </ThemeIcon>
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.fn.lighten(theme.other.textDark, 0.2)
                  : theme.fn.darken(theme.other.textLight, 1),
            })}
            weight='lighter'
            mt='sm'
            size='xs'
          >
            Service
          </Text>
          <Text
            sx={{
              lineHeight: 1,
            }}
            mb='sm'
            weight='bold'
            size='lg'
          >
            Search Engine
          </Text>
          <Text size='sm'>
            All my web apps have good SEO included but if you need more i have a
            good SEO plan that it might get you to google first page.
          </Text>
        </Box>
        <Box>
          <ThemeIcon
            pl='4.5px'
            sx={(theme) => ({
              backgroundColor: theme.fn.rgba(theme.colors.orange[5], 0.2),
            })}
            size='3.5rem'
            radius='xl'
            variant='filled'
          >
            <Image width={30} height={30} alt='ads' src={ads} />
          </ThemeIcon>
          <Text
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.fn.lighten(theme.other.textDark, 0.2)
                  : theme.fn.darken(theme.other.textLight, 1),
            })}
            weight='lighter'
            mt='sm'
            size='xs'
          >
            Service
          </Text>
          <Text
            sx={{
              lineHeight: 1,
            }}
            mb='sm'
            weight='bold'
            size='lg'
          >
            AD-Management
          </Text>
          <Text size='sm'>
            I Can Mange All Your Google AdSense {"Ad's"} and link it to Google
            Analytics for you.
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Services
