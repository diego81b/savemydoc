import * as React from 'react'
import { ColorModeProvider, CSSReset, ThemeProvider, Box } from '@chakra-ui/core'
import { customTheme } from "../custom-theme"

export const DarkModeTheme: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="dark">
        <CSSReset />
        <Box>{children}</Box>
      </ColorModeProvider>
    </ThemeProvider >
  )
}
