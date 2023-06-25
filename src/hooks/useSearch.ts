import { useCallback, useEffect } from 'react'
import {
  getSearchAutoCompletion,
  setOpenAutoComplete,
  setSearch,
} from '../state/slice/search.slice'
import { useAppDispatch } from './useAppDIspatch'
import { useAppSelector } from './useAppSelector'
import { getSearchResults, setToDefault } from '../state/slice/music.slice'

export const useSearch = () => {
  const { search, searchAutoComplete, loading, canOpenAutoComplete } =
    useAppSelector((state) => state.searchState)

  const { musics } = useAppSelector((state) => state.musicState)

  const dispatch = useAppDispatch()

  const handleSearchValue = useCallback(
    (searchValue: string) => {
      dispatch(setSearch(searchValue))
      dispatch(getSearchAutoCompletion(searchValue))
    },
    [dispatch]
  )

  const handleSearchResult = useCallback(() => {
    dispatch(getSearchResults(search))
  }, [search, dispatch])

  useEffect(() => {
    dispatch(setToDefault())
  }, [dispatch])

  const handleOpenAutoComplete = useCallback(
    (open: boolean) => {
      dispatch(setOpenAutoComplete(open))
    },
    [dispatch]
  )

  return {
    handleSearchValue,
    search,
    searchAutoComplete,
    handleSearchResult,
    loading,
    musics,
    canOpenAutoComplete,
    handleOpenAutoComplete,
  }
}
