import { Home } from './pages/Home/Home'
// import { Login } from './pages/Login/Login'
import useAuth from './hooks/useAuth'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './pages/Search/Search'
import { Playlist } from './pages/Playlist/Playlist'
import { Favourites } from './pages/Favourites/Favourites'
import './app.css'

function App() {
  useAuth()
  return (
    <div className='font-roboto'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/favourites' element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
