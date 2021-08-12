import data from '@assets/biblia/json/nvi_thin.json'
import { Box, Heading, Link, Spinner } from '@chakra-ui/react'
import { Layout } from '@components/Layout'
import { BibleBook } from '@types/Bible'
import { deburr, kebabCase } from 'lodash'
import { InferGetStaticPropsType, NextPage } from 'next'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const getStaticProps = async () => {
  const books = data

  return {
    props: {
      books
    }
  }
}

interface RenderBooksProps {
  books: BibleBook[]
}

const RenderBooks = ({ books }: RenderBooksProps) => {
  return (
    <>
      {books &&
        books.map((book: BibleBook, index: number) => (
          <Box key={index} m={5}>
            <Heading as="h3" size="lg" mb={2} mt={10}>
              {book.name}
            </Heading>

            <RenderChapters key={`book-` + index} book={book} />
          </Box>
        ))}
    </>
  )
}

interface ChapterProps {
  book: BibleBook
}

const RenderChapters = ({ book }: ChapterProps) => {
  return (
    <>
      {book.chapters.map((chapter, index) => {
        const link = deburr(
          `/biblia/livro/${kebabCase(book.name)}/capitulo/${index + 1}`
        )

        const chapterNumber = ` ${index + 1}`

        return (
          <Link key={index}>
            <NextLink
              prefetch={false}
              as={link}
              href={link}
              passHref
              key={link}
            >
              <Box as="span" m={2}>
                {chapterNumber}
              </Box>
            </NextLink>
          </Link>
        )
      })}
    </>
  )
}

const ListChapters: NextPage<{ books: BibleBook[] }> = ({
  books
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback } = useRouter()

  if (isFallback)
    return (
      <Layout>
        <Box p={8}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Box>
      </Layout>
    )

  return (
    <Layout>
      <Box p={8}>
        <RenderBooks books={books} />
      </Box>
    </Layout>
  )
}

export default ListChapters
