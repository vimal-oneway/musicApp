import {
  Action,
  AnyAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'

import { IMusic, IMusicsState, ISearchResults } from '../../types/musics.types'

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

      return response.data.tracks
    } catch (error) {
      console.error(error)
    }
  },
  {
    condition: (_, { getState }) => {
      const { musicState } = getState()
      const { musics } = musicState
      if (musics.length === 0) return true
      return false
    },
  }
)

// * Get music data related to search value
export const getSearchResults = createAsyncThunk<
  IMusic[],
  string,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: boolean
  }
>(
  'music/getSearchResults',
  async (search, thunkApi) => {
    try {
      const response = await Api.get<ISearchResults>('/search', {
        params: {
          term: search,
          locale: 'en-US',
          offset: '0',
          limit: '9',
        },
      })

      if (!response.data) return thunkApi.rejectWithValue(true)

      const musicsData: IMusic[] = response.data.tracks.hits.map(
        (hit) => hit.track
      )

      return musicsData
    } catch (error) {
      return thunkApi.rejectWithValue(true)
    }
  },
  {
    condition: (_, { getState }) => {
      const { musics } = getState().musicState
      if (musics.length === 0) return true
      return false
    },
  }
)

export const setToDefault = createAsyncThunk('music/setToDefault', async () => {
  return
})

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
        state.error = false
      })
      .addCase(getSearchResults.fulfilled, (state, action) => {
        state.loading = false
        state.musics = action.payload
        state.error = false
      })
      .addCase(setToDefault.fulfilled, (state) => {
        state = initialState
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
