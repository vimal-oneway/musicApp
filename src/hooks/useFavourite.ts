import { useCallback } from 'react'
import { useAppSelector } from './useAppSelector'
import { useAppDispatch } from './useAppDIspatch'
import {
  addSongToFavourite,
  deleteSongToFavourite,
} from '../state/slice/favourite.slice'

import { IMusic } from '../types/musics.types'

export const useFavourite = () => {
  const { musics, loading, error } = useAppSelector(
    (state) => state.favouriteState
  )

  const dispatch = useAppDispatch()

  const handleFavouriteEvents = useCallback(
    (selectedMuisc: IMusic, add: boolean) => {
      if(!musics) {
        dispatch(addSongToFavourite(selectedMuisc))
        return
      }
      const isExit = musics.find((music) => music.url === selectedMuisc.url)
      if (add && !isExit) dispatch(addSongToFavourite(selectedMuisc))
      if (!add && isExit) dispatch(deleteSongToFavourite(selectedMuisc))
    },
    [dispatch, musics]
  )

  return [handleFavouriteEvents, { musics, loading, error }] as const
}
