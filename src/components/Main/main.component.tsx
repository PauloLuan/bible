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

const Main = ({ testId, name, chapter, index }: MainProps) => {
  return (
    <>
      <Container data-testid={testId}>
        <Stack>
          <Spacer />
          <Chapters key={index} index={index} name={name} chapter={chapter} />
        </Stack>
      </Container>
    </>
  )
}

export { Main }
