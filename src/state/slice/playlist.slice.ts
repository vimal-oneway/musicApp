import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import { RejectedAction, RejectedValue } from '../../types/error.type'
import { localStorageKeys } from '../../types/localStorage.types'
import { IPlayListArray, IPlayListState } from '../../types/playlist.type'

const initialState: IPlayListState = {
  loading: false,
  playlist: JSON.parse(
    localStorage.getItem(localStorageKeys.playlist) as string
  ),
  error: false,
}

// * Get playlist music tracks from localstorage
export const getPlaylist = createAsyncThunk<
  IPlayListArray,
  void,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: RejectedValue
  }
>('favourite/getFavouriteMusics', async (_, thunkApi) => {
  try {
    const playlist: IPlayListArray = JSON.parse(
      localStorage.getItem(localStorageKeys.playlist) as string
    )
    if (playlist) return playlist
    return thunkApi.rejectWithValue({ error: true })
  } catch (error) {
    return thunkApi.rejectWithValue({ error: true })
  }
})

// * add playlist music tracks to localstorage
export const addSongToPlaylist = createAsyncThunk<
  IPlayListArray,
  IPlayListArray,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: RejectedValue
  }
>('favourite/addSongToFavourite', async (playlist, thunkApi) => {
  try {
    localStorage.setItem(localStorageKeys.favourite, JSON.stringify(playlist))
    return playlist
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

export const playlistSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPlaylist.fulfilled, (state, action) => {
        state.loading = false
        state.playlist = action.payload
        state.error = false
      })
      .addCase(addSongToPlaylist.fulfilled, (state, action) => {
        state.loading = false
        state.playlist = action.payload
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

export default playlistSlice.reducer
