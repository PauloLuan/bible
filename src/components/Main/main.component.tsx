import { ChevronLeftIcon, ChevronRightIcon, CopyIcon } from '@chakra-ui/icons'
import {
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  useToast
} from '@chakra-ui/react'
import { deburr, kebabCase } from 'lodash'
import NextLink from 'next/link'
import { useCopyToClipboard } from 'react-use'

export interface MainProps {
  testId?: string
  index: string
  name: string
  chapter: string[]
}

interface VerseProps {
  text: string
  index: number
}

const Verse = ({ text, index }: VerseProps) => {
  const [_, copyToClipboard] = useCopyToClipboard()
  const toast = useToast()

  return (
    <Text fontSize="xl" fontWeight="light">
      <Text as="i" fontSize="xs">
        {index} {'  -  '}
      </Text>
      {text}
      <CopyIcon
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
}

const Verses = ({ verses, name }: VersesProps) => {
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

      {verses.map((verse, index) => (
        <Verse key={index} text={verse} index={index + 1} />
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
      <Verses key={index} name={`Capítulo ${index}`} verses={chapter} />
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
            as={previousLink}
            href={previousLink}
            passHref
            key={previousLink}
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
        <NextLink as={nextLink} href={nextLink} passHref key={nextLink}>
          <HStack p={[2, 4]}>
            <Text fontSize={['sm', 'md']}>
              Próximo: {name} {next}
            </Text>

            <ChevronRightIcon mr="1" fontSize={[15, 32]} />
          </HStack>
        </NextLink>
      </Flex>
    </SimpleGrid>
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
