import { Heading } from '@chakra-ui/react'
import { BibleBook } from '@types/Bible'
import { Layout, Main } from 'components'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
import { deburr, kebabCase } from 'lodash'

import data from '@assets/biblia/json/min.json'

export const getStaticProps: GetStaticProps = async (context) => {
  const bookSlug = context?.params?.book
  const chapterSlug = context?.params?.chapter

  const book = { teste: 123 } // TODO: fazer o find do objeto dentro de data
  const chapter = { teste: 123 } // pega somente o chapter array com os verses

  return {
    props: {
      book,
      chapter
    }
  }
}

export const getStaticPaths: GetStaticPaths<{
  book: string
  chapter: string
}> = async () => {
  const paths = []

  data.map((book) => {
    book.chapters.map((chapter, index) => {
      const cleanName = deburr(kebabCase(book.name))
      paths.push({
        params: {
          book: cleanName,
          chapter: index
        }
      })
    })
  })

  return {
    paths: [], // o paths por algum motivo ta ficando zuado se eu nao passo array vazio
    fallback: 'blocking'
  }
}

function ChapterPage({
  book,
  chapter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Heading>book: {book.teste}</Heading>
      <Heading>chapter: {chapter.teste}</Heading>

      {/* {data.map((book: BibleBook, index: number) => (
        <Main
          key={index}
          name={book.name}
          chapter={book.chapters[index]}
          index={`${'' + chapter}`}
        />
      ))} */}
    </Layout>
  )
}

export default ChapterPage
