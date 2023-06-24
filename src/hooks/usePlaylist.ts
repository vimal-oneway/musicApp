import { useEffect, useState } from 'react'
import { useAppSelector } from './useAppSelector'
import { IPLaylist } from '../types/playlist.type'
import { useParams } from 'react-router-dom'

export const usePlaylist = ( ) => {
  const { playlists } = useAppSelector((state) => state.playlistState)
  const [playlist, setPlaylist] = useState<IPLaylist>()

  const {id} = useParams()

  useEffect(() => {
    if (playlists && playlists.length === 0 && id) return
    const playlistFound = playlists.find((playlist) => playlist.id === id)
    if (!playlistFound) return
    setPlaylist(playlistFound)
  }, [playlists, id])

  return [playlist]
}
