import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Flex, HStack, Link, SimpleGrid, Text } from '@chakra-ui/react'
import { deburr, kebabCase } from 'lodash'
import NextLink from 'next/link'

// TODO: adicionar validação de tamanho maximo do pico
const renderIcon = (isPrevious: boolean) => {
  return isPrevious ? (
    <ChevronLeftIcon mr="1" fontSize={32} />
  ) : (
    <ChevronRightIcon mr="1" fontSize={32} />
  )
}

const renderText = (
  name: string,
  isPrevious: boolean,
  currentIndex: string
) => {
  const indexNumber = +currentIndex
  const previousIndex = indexNumber - 1
  const nextIndex = indexNumber + 1

  return (
    <Text fontSize="md">
      {isPrevious
        ? `Anterior: ${name} ${previousIndex}`
        : `Próximo: ${name} ${nextIndex}`}
    </Text>
  )
}

const checkShouldBeRendered = (currentIndex, maxSize) => {
  return true
}

const NavigatorItem = ({
  name,
  isPrevious,
  navigatorIndex,
  currentIndex,
  maxSize
}) => {
  const href = makeLink(name, navigatorIndex)
  const shouldBeRendered = checkShouldBeRendered(currentIndex, maxSize)

  if (!shouldBeRendered) return <></>

  return (
    <>
      <NextLink as={href} href={href} passHref key={href}>
        <Link key={currentIndex} style={{ textDecoration: 'none' }}>
          <HStack p={4}>
            {renderIcon(isPrevious)}
            {renderText(name, isPrevious, currentIndex)}
          </HStack>
        </Link>
      </NextLink>
    </>
  )
}

const makeLink = (name: string, index: string) => {
  return deburr(`/biblia/livro/${kebabCase(name)}/capitulo/${index}`)
}

export interface FooterNavigatorProps {
  name: string
  currentIndex: string
  maxSize: number
}

export const FooterNavigator = ({
  name,
  currentIndex,
  maxSize
}: FooterNavigatorProps) => {
  const indexNumber = +currentIndex
  const previousIndex = indexNumber - 1
  const nextIndex = indexNumber + 1

  return (
    <SimpleGrid columns={2} spacing={10} py={10}>
      <Flex
        color="black"
        boxShadow="2xl"
        bg="gray.100"
        height="80px"
        align="center"
        justify="center"
        _hover={{
          bg: 'gray.300'
        }}
      >
        <NavigatorItem
          name={name}
          navigatorIndex={previousIndex}
          currentIndex={indexNumber}
          isPrevious={true}
          maxSize={maxSize}
        />

        <NavigatorItem
          name={name}
          navigatorIndex={nextIndex}
          currentIndex={indexNumber}
          isPrevious={false}
          maxSize={maxSize}
        />
      </Flex>
    </SimpleGrid>
  )
}
