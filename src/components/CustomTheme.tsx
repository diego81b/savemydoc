import * as React from 'react'
import { CSSReset, Box, ChakraProvider } from '@chakra-ui/core'
import theme from "../chakra"

export const CustomTheme: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {children}
    </ChakraProvider>
  )
}
