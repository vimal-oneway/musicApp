import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search } from './pages/Search/Search'
import { Playlist } from './pages/Playlist/Playlist'
import { Favourites } from './pages/Favourites/Favourites'
import './app.css'
import { AddToPlaylistDialog } from './components/DialogBox/AddToPlaylistDialog/AddToPlaylistDialog'
import { Playlists } from './pages/Playlists/Playlists'

function App() {
  return (
    <div className="font-roboto">
      <BrowserRouter>
        <AddToPlaylistDialog />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
