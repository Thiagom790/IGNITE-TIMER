import { ThemeProvider } from 'styled-components'
import { Button } from './components/button'
import { GlobalStyle } from './components/styles/global'
import { defaultTheme } from './components/styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button />
      <Button />
      <Button />
      <GlobalStyle />
    </ThemeProvider>
  )
}
