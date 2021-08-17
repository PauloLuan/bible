import { ChevronLeftIcon, ChevronRightIcon, CopyIcon } from '@chakra-ui/icons'
import {
  chakra,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  IconButton,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VisuallyHidden
} from '@chakra-ui/react'
import { deburr, kebabCase } from 'lodash'
import NextLink from 'next/link'
import { FaHome, FaWhatsapp } from 'react-icons/fa'
import { useCopyToClipboard } from 'react-use'

export interface MainProps {
  testId?: string
  index: string
  name: string
  chapter: string[]
}

interface VerseProps {
  text: string
  completeName: string
  index: number
}

const Verse = ({ completeName, text, index }: VerseProps) => {
  const [_, copyToClipboard] = useCopyToClipboard()
  const toast = useToast()

  return (
    <Text fontSize="xl" fontWeight="light">
      <VisuallyHidden>
        {completeName} versículo: {index}
      </VisuallyHidden>
      <Text
        as="i"
        fontSize="xs"
        aria-label={`O texto abaixo é o ${completeName} versículo: ${index}`}
      >
        {index} {'  -  '}
      </Text>
      {text}
      <CopyIcon
        aria-label="Clique neste botão para copiar a passagem."
        onClick={() => {
          copyToClipboard(text)
          toast({
            title: 'Sucesso!',
            description: 'Seu texto foi copiado!',
            status: 'success',
            duration: 2000,
            isClosable: true
          })
        }}
        w={4}
        h={4}
        ml={2}
        cursor="pointer"
      />
    </Text>
  )
}

interface VersesProps {
  verses: string[]
  name: string
  baseName: string
}

const Verses = ({ baseName, verses, name }: VersesProps) => {
  const completeName = `${baseName} ${name}`
  return (
    <>
      <Heading
        fontWeight="hairline"
        fontStyle="italic"
        as="h2"
        size="sm"
        pb={5}
      >
        {name}
      </Heading>

      <ShareButton
        aria-label={`Clique neste botão para enviar a passagem ${completeName} via whatsapp.`}
        text={completeName}
      />

      <Divider />

      {verses.map((verse, index) => (
        <Verse
          completeName={completeName}
          key={index}
          text={verse}
          index={index + 1}
        />
      ))}
    </>
  )
}

interface ChapterProps {
  index: string
  chapter: string[]
  name: string
}

const Chapters = ({ index, chapter, name }: ChapterProps) => {
  return (
    <>
      <Heading size="3xl">{name}</Heading>
      <Verses
        key={index}
        baseName={name}
        name={`Capítulo ${index}`}
        verses={chapter}
      />
    </>
  )
}

// FIXME: faltou a validação do next quando for o último capitulo...
// para isto vou precisar saber o tamanho do array de items...
const Footer = ({ index, name }) => {
  const indexNumber = +index
  const previous = indexNumber - 1
  const next = indexNumber + 1
  const SHOULD_RENDER_PREVIOUS = previous > 0

  const previousLink = deburr(
    `/biblia/livro/${kebabCase(name)}/capitulo/${previous}`
  )
  const nextLink = deburr(`/biblia/livro/${kebabCase(name)}/capitulo/${next}`)

  return (
    <>
      <SimpleGrid columns={2} spacing={[1, 10]} py={10}>
        {SHOULD_RENDER_PREVIOUS && (
          <Flex
            as="a"
            color="black"
            boxShadow="2xl"
            bg="gray.100"
            height="80px"
            align="center"
            justify="center"
            _hover={{
              bg: 'gray.300',
              cursor: 'pointer'
            }}
          >
            <NextLink
              aria-label={`Clique neste botão para ler a passagem anterior a esta`}
              as={previousLink}
              href={previousLink}
              passHref
              key={previousLink}
              prefetch={false}
            >
              <HStack p={[2, 4]}>
                <ChevronLeftIcon mr="1" fontSize={[15, 32]} />
                <Text fontSize={['sm', 'md']}>
                  Anterior: {name} {previous}
                </Text>
              </HStack>
            </NextLink>
          </Flex>
        )}

        <Flex
          as="a"
          color="black"
          boxShadow="2xl"
          bg="gray.100"
          height="80px"
          align="center"
          justify="center"
          _hover={{
            bg: 'gray.300',
            cursor: 'pointer'
          }}
        >
          <NextLink
            aria-label={`Clique neste botão para ler a passagem posterior a esta.`}
            as={nextLink}
            href={nextLink}
            passHref
            key={nextLink}
            prefetch={false}
          >
            <HStack p={[2, 4]}>
              <Text fontSize={['sm', 'md']}>
                Próximo: {name} {next}
              </Text>

              <ChevronRightIcon mr="1" fontSize={[15, 32]} />
            </HStack>
          </NextLink>
        </Flex>
      </SimpleGrid>
      <BackHomeButton />
    </>
  )
}

const BackHomeButton = () => {
  return (
    <Flex
      as="a"
      color="black"
      boxShadow="2xl"
      bg="gray.100"
      height="80px"
      align="center"
      justify="center"
      _hover={{
        bg: 'gray.300',
        cursor: 'pointer'
      }}
    >
      <NextLink as={'/'} href={'/'} passHref key={'/'} prefetch={false}>
        <HStack p={[2, 4]}>
          <IconButton
            aria-label="Voltar para a tela inicial"
            fontSize={32}
            variant="inherit"
            icon={<FaHome />}
          />
          <Text fontSize={['sm', 'md']}>Voltar para a Tela Inicial</Text>
        </HStack>
      </NextLink>
    </Flex>
  )
}

const ShareButton = ({ text = '' }) => {
  let currentUrl = ``
  if (process.browser) {
    currentUrl = window.location.href
  }

  const href = `whatsapp://send?text=Leia ${text} da Bíblia Sagrada! Confira aqui: ${currentUrl}`
  return (
    <Flex
      as="a"
      color={useColorModeValue('white', 'green.100')}
      boxShadow="2xl"
      height="80px"
      align="center"
      justify="center"
      bg={useColorModeValue('green.500', 'green.600')}
      _hover={{
        bg: 'green.700',
        cursor: 'pointer'
      }}
    >
      <chakra.a href={href} data-action="share/whatsapp/share">
        <HStack p={[2, 4]}>
          <IconButton
            aria-label="Compartilhar no Whatsapp"
            fontSize={32}
            variant="inherit"
            icon={<FaWhatsapp />}
          />
          <Text fontSize={['sm', 'md']}>Compartilhar no Whatsapp</Text>
        </HStack>
      </chakra.a>
    </Flex>
  )
}

const Main = ({ testId, name, chapter, index }: MainProps) => {
  return (
    <>
      <Container data-testid={testId}>
        <Stack>
          <Spacer />
          <Chapters key={index} index={index} name={name} chapter={chapter} />
          <Footer index={index} name={name} />
        </Stack>
      </Container>
    </>
  )
}

export { Main }
