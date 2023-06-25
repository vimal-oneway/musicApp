import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  isPending,
} from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '../store'
import { RejectedAction, RejectedValue } from '../../types/error.type'
import { SearcgAutoComplete, SearchState } from '../../types/search.types'
import { Api } from '../../config/axios.conf'

const initialState: SearchState = {
  loading: false,
  search: '',
  searchAutoComplete: [],
  error: false,
  canOpenAutoComplete: false,
}

// * Set search value
export const setSearch = createAsyncThunk<string, string>(
  'search/setSearch',
  async (search) => {
    return search
  }
)

// * get search autocomplete
export const getSearchAutoCompletion = createAsyncThunk<
  SearcgAutoComplete[],
  string,
  {
    state: RootState
    dispatch: AppDispatch
    rejectValue: RejectedValue
  }
>(
  'search/getSearchAutoCompletion',
  async (searchValue, thunkApi) => {
    try {
      const searchAutoComplete = await Api.get('/auto-complete', {
        params: {
          locale: 'en-US',
          term: searchValue,
        },
      })
      return searchAutoComplete.data.hints
    } catch (error) {
      return thunkApi.rejectWithValue({ error: true })
    }
  },
  {
    condition: (searchValue, { getState }) => {
      const { search } = getState().searchState
      if (searchValue && search != searchValue) return true
      return false
    },
  }
)

// * set open autocomplete
export const setOpenAutoComplete = createAsyncThunk<boolean, boolean>(
  'search/setOpenAutoComplete',
  async (open) => {
    return open
  }
)

/**
 * isRejectedAction type guard function that checks if the action is rejected
 * @param action - action object
 * @returns boolean
 */
function isRejectedAction(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected')
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchAutoCompletion.fulfilled, (state, action) => {
        state.loading = false
        state.searchAutoComplete = action.payload
        state.error = false
      })
      .addCase(setSearch.fulfilled, (state, action) => {
        state.loading = false
        state.search = action.payload
        state.error = false
      })
      .addCase(setOpenAutoComplete.fulfilled, (state, action) => {
        state.loading = false
        state.canOpenAutoComplete = action.payload
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

export default searchSlice.reducer
