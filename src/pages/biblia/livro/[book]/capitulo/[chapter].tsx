import data from '@assets/biblia/json/nvi.json'
import { BibleBook } from '@types/Bible'
import { Layout, Main } from 'components'
import { deburr, get, kebabCase } from 'lodash'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

const findBookByName = (name: string) => {
  if (!name) return {}
  return data.find((book) => deburr(kebabCase(book.name)) === name)
}

export const getStaticProps: GetStaticProps = async (context) => {
  const bookSlug = context?.params?.book
  const selectedChapter = context?.params?.chapter

  const reduceOneOnChapter = Number(selectedChapter) - 1

  const book: BibleBook = findBookByName(bookSlug)
  const chapter = get(book, `chapters[${reduceOneOnChapter}]`)

  return {
    props: {
      book,
      chapter,
      index: selectedChapter
    }
  }
}

export const getStaticPaths: GetStaticPaths<{
  book: string
  chapter: string
}> = async () => {
  const paths: any = []

  data.map((book) => {
    book.chapters.map((chapter, index) => {
      const cleanName = deburr(kebabCase(book.name))
      paths.push({
        params: {
          book: cleanName,
          chapter: String(index + 1)
        }
      })
    })
  })

  return {
    paths,
    fallback: false
  }
}

function ChapterPage({
  book,
  chapter,
  index
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Main
        key={index}
        name={book.name}
        chapter={chapter}
        index={`${'' + index}`}
      />
    </Layout>
  )
}

export default ChapterPage
