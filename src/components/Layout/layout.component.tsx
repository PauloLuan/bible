import { Box, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export interface LayoutProps {
  testId?: string
  children?: ReactNode
}

export const Layout = ({
  testId = 'main-component',
  children
}: LayoutProps) => {
  return (
    <Box w="full" h="full">
      <VStack
        p={[0, 16]}
        spacing={[4, 16]}
        maxW={'container.xl'}
        m={[4, '0 auto']}
        data-testid={testId}
      >
        {children}
      </VStack>
    </Box>
  )
}
