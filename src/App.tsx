import io from 'socket.io-client'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './Navigation/Navigation'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import useStore, { State } from './zustand/store'
import { ThemeProps, darkTheme, lightTheme } from './Constants/Theme'

// const socket = io('http://192.168.1.104:5000')

const Background = styled.div((props: ThemeProps) => ({
  backgroundColor: props.theme.background,
  height: '100vh',
  display: 'flex',
  alignItems: 'center'
}));

const Container = styled.div({
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
  border: '1px solid black',
  height: '95%',
})

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Playfair Display', serif;
  }`

function App() {

  const theme = useStore((state: State) => state.theme.mode)

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
      <BrowserRouter>
        <GlobalStyles />
        <Background>
          <Container>
            <Navigation />
          </Container>
        </Background>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
