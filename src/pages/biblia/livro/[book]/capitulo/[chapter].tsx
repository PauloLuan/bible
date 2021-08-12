import { Heading } from '@chakra-ui/react'
import { Layout, Main } from 'components'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
const IS_PRODUCTION = process.env.NODE_ENV === 'production'

export const getStaticProps: GetStaticProps = async (context) => {
  const book = context?.params?.book
  const chapter = context?.params?.chapter

  return {
    props: {
      chapter,
      book
    }
  }
}

export const getStaticPaths: GetStaticPaths<{
  artist: string
  cipher: string
}> = async () => {
  //   const paths = []

  return {
    paths: [],
    fallback: 'blocking'
  }
}

function ChapterPage({
  book,
  chapter
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Heading>
        {book} {chapter}
      </Heading>

      <Main />
    </Layout>
  )
}

export default ChapterPage
