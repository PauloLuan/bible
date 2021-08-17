import {
  chakra,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden
} from '@chakra-ui/react'
import NextLink from 'next/link'
import * as React from 'react'
import { FaBible, FaMoon, FaSun } from 'react-icons/fa'

export interface HeaderProps {
  name?: string
}

export const Header = ({ name }: HeaderProps) => {
  const { toggleColorMode: toggleMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        data-testid="header"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <NextLink as={'/'} href={'/'} passHref key={'/'} prefetch={false}>
            <Flex as="a" align="center">
              <VisuallyHidden>Bíblia Sagrada</VisuallyHidden>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                <IconButton
                  aria-label="Open menu"
                  fontSize="20px"
                  color={useColorModeValue('gray.800', 'inherit')}
                  variant="ghost"
                  icon={<FaBible />}
                />
                Bíblia Sagrada
              </chakra.h1>
            </Flex>
          </NextLink>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={'inline-flex'}
            >
              {/* <Button variant="ghost">Sign in</Button> */}
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Mudar para o modo Noturno`}
                variant="outline"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </HStack>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  )
}
