import { useEffect, useState } from 'react'
import { useAppSelector } from './useAppSelector'
import { IPLaylist, IPlayListArray } from '../types/playlist.type'
import { useParams } from 'react-router-dom'

export const usePlaylist = ( ) => {
  const userPlaylists= useAppSelector((state) => state.playlistState).playlists
  const [playlist, setPlaylist] = useState<IPLaylist>()
  const [playlists, setPlaylists] = useState<IPlayListArray>([])

  const {id} = useParams()

  useEffect(() => {
    if (userPlaylists && userPlaylists.length === 0 && id) return
    const updatedPlaylists: IPlayListArray = []
    let foundPlaylist: IPLaylist | undefined

    userPlaylists.forEach((playlist) => {
      if (playlist.id === id) {
        foundPlaylist = playlist
      } else {
        updatedPlaylists.push(playlist)
      }
    })

    if (!foundPlaylist) return
    setPlaylists(updatedPlaylists)
    setPlaylist(foundPlaylist)
  }, [userPlaylists, id])

  return {playlist, playlists}
}
