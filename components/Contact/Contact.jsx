import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
  Box,
  useMantineTheme,
} from '@mantine/core'
import useStyle from './styleContact'
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSun,
  IconCheck,
  IconX,
} from '@tabler/icons'
import { useClipboard } from '@mantine/hooks'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import { showNotification } from '@mantine/notifications'

function Contact() {
  const { classes } = useStyle()
  const clipboardEmail = useClipboard({ timeout: 500 })
  const clipboardPhone = useClipboard({ timeout: 500 })
  const clipboardAddress = useClipboard({ timeout: 500 })
  const clipboardWorking = useClipboard({ timeout: 500 })

  const form = useRef()

  const theme = useMantineTheme()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_457ejun',
        'template_d916vvv',
        form.current,
        'user_uf9J6w4mKauNRphbXWblE'
      )
      .then(
        (result) => {
          showNotification({
            message: 'Message has been sent',
            icon: <IconCheck size={20} />,
            color: 'green',
          })
        },
        (error) => {
          showNotification({
            message: 'Message has not been sent',
            icon: <IconX size={20} />,
            color: 'red',
          })
        }
      )
    e.target.reset()
  }

  return (
    <Container
      id='contact'
      py='7rem'
      px='xl'
      size='xl'
      className={classes.wrapper}
    >
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        sx={{
          alignItems: 'center',
        }}
      >
        <Box>
          <Title className={classes.title}>Contact Me</Title>
          <Text className={classes.description} mt='sm' mb={30}>
            Leave your email and I will get back to you within 24 hours
          </Text>
          <Group spacing='xl' direction='column'>
            <Group spacing='sm' align='flex-start'>
              {clipboardEmail.copied ? (
                <IconCheck color={theme.colors.green[5]} />
              ) : (
                <ActionIcon
                  onClick={(e) => {
                    clipboardEmail.copy('m7mdsy976@gmail.com')
                  }}
                  size={35}
                  className={classes.social}
                  variant='transparent'
                >
                  <IconMail size={35} />
                </ActionIcon>
              )}
              <Group spacing='0' direction='column'>
                <Text weight='300' size='sm'>
                  Email
                </Text>
                <Text>m7mdsy976@gmail.com</Text>
              </Group>
            </Group>
            <Group spacing='sm' align='flex-start'>
              {clipboardPhone.copied ? (
                <IconCheck color={theme.colors.green[5]} />
              ) : (
                <ActionIcon
                  onClick={(e) => {
                    clipboardPhone.copy('0789903356')
                  }}
                  size={35}
                  className={classes.social}
                  variant='transparent'
                >
                  <IconPhone size={35} />
                </ActionIcon>
              )}
              <Group spacing='0' direction='column'>
                <Text weight='300' size='sm'>
                  Phone
                </Text>
                <Text>0789903356</Text>
              </Group>
            </Group>
            <Group spacing='sm' align='flex-start'>
              {clipboardAddress.copied ? (
                <IconCheck color={theme.colors.green[5]} />
              ) : (
                <ActionIcon
                  onClick={(e) => {
                    clipboardAddress.copy('Jordan, Amman')
                  }}
                  size={35}
                  className={classes.social}
                  variant='transparent'
                >
                  <IconMapPin size={35} />
                </ActionIcon>
              )}
              <Group spacing='0' direction='column'>
                <Text weight='300' size='sm'>
                  Address
                </Text>
                <Text>Jordan, Amman</Text>
              </Group>
            </Group>
            <Group spacing='sm' align='flex-start'>
              {clipboardWorking.copied ? (
                <IconCheck color={theme.colors.green[5]} />
              ) : (
                <ActionIcon
                  onClick={(e) => {
                    clipboardWorking.copy('8 a.m. – 11 p.m.')
                  }}
                  size={35}
                  className={classes.social}
                  variant='transparent'
                >
                  <IconSun size={35} />
                </ActionIcon>
              )}
              <Group spacing='0' direction='column'>
                <Text weight='300' size='sm'>
                  Working hours
                </Text>
                <Text>9 a.m. – 12 a.m</Text>
              </Group>
            </Group>
          </Group>
        </Box>
        <Box
          ref={form}
          component='form'
          onSubmit={sendEmail}
          className={classes.form}
        >
          <TextInput
            label='Email'
            placeholder='your@email.com'
            required
            type='email'
            variant='default'
            id='email'
            name='email'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <TextInput
            label='Name'
            placeholder='John Doe'
            variant='default'
            name='name'
            id='name'
            mt='md'
            type='text'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />
          <Textarea
            required
            label='Your message'
            placeholder='I want to know about...'
            variant='default'
            id='message'
            name='message'
            type='text'
            minRows={9}
            mt='md'
            classNames={{ input: classes.input, label: classes.inputLabel }}
          />

          <Group position='right' mt='md'>
            <Button type='submit' className={classes.control}>
              Send message
            </Button>
          </Group>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Contact
