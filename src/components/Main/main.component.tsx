import { CopyIcon } from '@chakra-ui/icons'
import { Container, Heading, Spacer, Stack, Text } from '@chakra-ui/react'
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

  return (
    <Text fontSize="xl" fontWeight="light">
      <Text as="i" fontSize="xs">
        {index} {'  -  '}
      </Text>
      {text}
      <CopyIcon
        onClick={() => copyToClipboard(text)}
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
  key: string
  chapter: string[]
  name: string
}

const Chapters = ({ key, chapter, name }: ChapterProps) => {
  return (
    <>
      <Heading size="3xl">{name}</Heading>
      <Heading>{key}</Heading>
      <Verses key={key} name={`Capítulo: ${key}`} verses={chapter} />
    </>
  )
}

const Main = ({ testId, name, chapter, index }: MainProps) => {
  return (
    <>
      <Container data-testId={testId}>
        <Stack>
          <Spacer />
          <Heading>{index}</Heading>
          <Chapters key={index} name={name} chapter={chapter} />
        </Stack>
      </Container>
    </>
  )
}

export { Main }
