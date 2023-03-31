import io from 'socket.io-client'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import useStore, { State } from './zustand/store'
import { Theme, darkTheme, lightTheme } from './Constants/Theme'

const socket = io('http://192.168.1.104:5000')

const Container = styled.div((props: { theme: Theme }) => ({
  backgroundColor: props.theme.light,
  height: '100vh'
}))

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }`

function App() {

  const theme = useStore((state: State) => state.theme.mode)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <BrowserRouter>
        <GlobalStyles />
        <Container>
          <Navigation />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
