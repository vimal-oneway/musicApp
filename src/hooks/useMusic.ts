import { useEffect } from 'react'
import { getMusicRecommendations } from '../state/slice/music.slice'
import { useAppDispatch } from './useAppDIspatch'
import { useAppSelector } from './useAppSelector'

export const useMusic = () => {
  const dispatch = useAppDispatch()
  const { musics, loading, error } = useAppSelector((state) => state.musicState)

  useEffect(() => {
    dispatch(getMusicRecommendations())
  }, [dispatch, musics])

  return { musics, loading, error }
}
