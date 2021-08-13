import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { FooterNavigator } from '@components/FooterNavigator'
import { Pagination } from '@components/Pagination'
import { deburr, kebabCase } from 'lodash'
import NextLink from 'next/link'

export interface FooterProps {
  name: string
  index: string
  maxSize?: number
}

export const Footer = ({ name, index, maxSize }: FooterProps) => {
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
      <FooterNavigator />
    </>
  )
}
