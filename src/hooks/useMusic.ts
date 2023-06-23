import { useCallback } from 'react'
import { getMusicRecommendations } from '../state/slice/music.slice'
import { useAppDispatch } from './useAppDIspatch'

export const useMusic = () => {
  const dispatch = useAppDispatch()

  const getMusic = useCallback(() => {
    dispatch(getMusicRecommendations())
  },[dispatch])
  
  return [getMusic]
}
