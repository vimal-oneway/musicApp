import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'

import { IMusic, IMusicsState } from '../../types/musics.types'
import { RejectedAction, RejectedValue } from '../../types/error.type'
import { localStorageKeys } from '../../types/localStorage.types'

const initialState: IMusicsState = {
  loading: false,
  musics: JSON.parse(
    localStorage.getItem(localStorageKeys.favourite) as string
  ),
  error: false,
}

// * Get favourite music tracks from localstorage
export const getFavouriteMusics = createAsyncThunk<
  IMusic[],
  void,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: RejectedValue
  }
>('playlist/getFavouriteMusics', async (_, thunkApi) => {
  try {
    const favourite: IMusic[] = JSON.parse(
      localStorage.getItem(localStorageKeys.favourite) as string
    )
    if (favourite) return favourite as IMusic[]
    return thunkApi.rejectWithValue({ error: true })
  } catch (error) {
    return thunkApi.rejectWithValue({ error: true })
  }
})

// * add favourite music tracks to localstorage
export const addSongToFavourite = createAsyncThunk<
  IMusic[],
  IMusic,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: RejectedValue
  }
>('playlist/addSongToFavourite', async (music, thunkApi) => {
  try {
    let {musics}  = thunkApi.getState().favouriteState

    if(musics && musics.length !==0){
      musics = [...musics, music]
    }else{
      musics = [music]
    }
    
    localStorage.setItem(
      localStorageKeys.favourite,
      JSON.stringify(musics)
    )
    return musics
  } catch (error) {
    return thunkApi.rejectWithValue({ error: true })
  }
})


// * delete favourite music tracks to localstorage
export const deleteSongToFavourite = createAsyncThunk<
  IMusic[],
  IMusic,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: RejectedValue
  }
>('playlist/deleteSongToFavourite', async (delMuic, thunkApi) => {
  try {
    let {musics}  = thunkApi.getState().favouriteState

    if(musics && musics.length !==0){
      musics = musics.filter((music)=>music.url !== delMuic.url)
    } 
    
    localStorage.setItem(
      localStorageKeys.favourite,
      JSON.stringify(musics)
    )

    return musics
  } catch (error) {
    return thunkApi.rejectWithValue({ error: true })
  }
})


/**
 * isRejectedAction type guard function that checks if the action is rejected
 * @param action - action object
 * @returns boolean
 */
function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

export const favouriteSlice = createSlice({
  name: 'favourite',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFavouriteMusics.fulfilled, (state, action) => {
        state.loading = false
        state.musics = action.payload
        state.error = false
      })
      .addCase(addSongToFavourite.fulfilled, (state, action) => {
        state.loading = false
        state.musics = action.payload
        state.error = false
      })
      .addCase(deleteSongToFavourite.fulfilled, (state, action) => {
        state.loading = false
        state.musics = action.payload
        state.error = false
      })
      .addMatcher(isRejectedAction, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      .addMatcher(isPending, (state) => {
        state.loading = true
      })
  },
})

export default favouriteSlice.reducer
