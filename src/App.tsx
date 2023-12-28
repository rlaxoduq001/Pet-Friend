import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Container } from './components/Container'
import { Navbar } from './components/Navbar'
import { MainPage } from './pages/MainPage'
import { SearchPage } from './pages/SearchPage'

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
