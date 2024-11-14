import './App.css'
// import Navbar from './components/Navbar'
// import MovieCard from './components/MovieCard'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className='h-screen w-screen bg-[#3b3b3b] overflow-hidden'>
      {/* <Navbar />
      hello
      <MovieCard /> */}
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    
    </div>
  )
}

export default App
