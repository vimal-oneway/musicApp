import {
  Action,
  AnyAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'

import { IMusic, IMusicsState } from '../../types/musics.types'

import { Api } from '../../config/axios.conf'

const initialState: IMusicsState = {
  loading: false,
  musics: [],
  error: false,
}

// * Get music tracks from api
export const getMusicRecommendations = createAsyncThunk<
  IMusic[],
  void,
  {
    state: RootState
    dispatch: AppDispatch
  }
>(
  'music/recommendations',
  async () => {
    try {
      const response = await Api.get('/songs/list-recommendations', {
        params: {
          key: '484129036',
          locale: 'en-US',
        },
      })
      console.log(response.data)
      return response.data.tracks
    } catch (error) {
      console.error(error)
    }
  },
  {
    condition: (_, { getState }) => {
      const { musicState } = getState()
      const { musics, loading } = musicState
      if (musics.length === 0 && !loading) return true
      return false
    },
  }
)

interface RejectedAction extends Action {
  payload: boolean
}

/**
 * isRejectedAction type guard function that checks if the action is rejected
 * @param action - action object
 * @returns boolean
 */
function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMusicRecommendations.fulfilled, (state, action) => {
        state.loading = false
        state.musics = action.payload
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

export default musicSlice.reducer
