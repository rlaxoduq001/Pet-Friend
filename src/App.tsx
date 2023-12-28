import './App.css'
import { Container } from './components/Container'
import { MainList } from './components/MainList'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <MainList title="공고기한이 하루남은 친구들"/>
        <MainList title="강아지 친구들"/>
        <MainList title="고양이 친구들"/>
      </Container>
    </>
  )
}

export default App
