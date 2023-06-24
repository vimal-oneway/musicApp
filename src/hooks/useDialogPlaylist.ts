import { ChangeEvent, useCallback } from 'react'
import { useAppDispatch } from './useAppDIspatch'
import {
  setDefault,
  setErrorMessage,
  setMusic,
  setName,
  setOpen,
} from '../state/slice/dialog.slice'
import { addSongToPlaylist } from '../state/slice/playlist.slice'
import { v4 as uuidv4 } from 'uuid'
import { useAppSelector } from './useAppSelector'
import { IPLaylist } from '../types/playlist.type'
import { IMusic } from '../types/musics.types'

export const useDialogPlaylist = () => {
  const dispatch = useAppDispatch()
  const { playlists } = useAppSelector((state) => state.playlistState)
  const { music, name } = useAppSelector((state) => state.dialogState)

  const handleOpenDialog = useCallback(
    (open: boolean) => {
      dispatch(setOpen(open))
      !open && dispatch(setDefault())
    },
    [dispatch]
  )

  const handleAddToPlaylist = () => {
    // * checks everything is ready
    if (!music || !name) {
      dispatch(setErrorMessage('Playlist name is required'))
      return
    } else {
      dispatch(setErrorMessage(''))
    }

    let updatedPlaylists = playlists

    // * create a new Playlist
    const uuid = uuidv4()
    const playlist: IPLaylist = {
      id: uuid,
      tracks: [music],
      name: name,
    }

    //  * checks playlists is empty and then push playlist into an array and set it to playlists
    if (!updatedPlaylists || updatedPlaylists.length === 0) {
      dispatch(addSongToPlaylist([playlist]))
      dispatch(setDefault())
      return
    }

    // * checks if is exist already
    const isExitIndex = playlists.findIndex(
      (playlist) =>
        playlist.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    )

    // * is exist update or create playlist
    if (isExitIndex == -1) {
      updatedPlaylists = [...updatedPlaylists, playlist]
    } else {
      updatedPlaylists[isExitIndex] = {
        ...updatedPlaylists[isExitIndex],
        tracks: [...updatedPlaylists[isExitIndex].tracks, music],
      }
    }

    dispatch(addSongToPlaylist(updatedPlaylists))
    dispatch(setDefault())
  }

  const handleDeleteMusicFormPlaylists = useCallback(
    (id: string, url: string) => {
      if (!playlists || playlists.length == 0) return

      const index = playlists.findIndex((playlist) => playlist.id === id)

      if (
        playlists[index].tracks.length == 1 &&
        playlists[index].tracks[0].url === url
      ) {
        const updatedPlaylists = playlists.filter((playlist)=>playlist.id !==id)
        dispatch(addSongToPlaylist(updatedPlaylists))
        return
      }

      const updatedPlaylists = playlists.map((playlist) => {
        if (playlist.id === id) {
          const musics = playlist.tracks.filter((music) => music.url !== url)
          return {
            ...playlist,
            tracks: musics,
          }
        }
        return playlist
      })

      console.log(updatedPlaylists, 'updated playlist')

      dispatch(addSongToPlaylist(updatedPlaylists))
    },
    [playlists, dispatch]
  )

  const handleSetPlaylistName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      dispatch(setName(event.target.value))
    },
    [dispatch]
  )

  const handleSetMusic = useCallback(
    (music: IMusic) => {
      dispatch(setMusic(music))
    },
    [dispatch]
  )

  return {
    handleOpenDialog,
    handleAddToPlaylist,
    handleSetPlaylistName,
    handleSetMusic,
    handleDeleteMusicFormPlaylists,
  } as const
}
