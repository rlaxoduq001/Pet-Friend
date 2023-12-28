import './App.css'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Navbar></Navbar>
      </Container>
    </>
  )
}

export default App
