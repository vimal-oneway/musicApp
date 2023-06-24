import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IMusic } from '../../types/musics.types'

interface IDialogSlice {
  open: boolean
  name: string
  music: IMusic | null
  errorMessage: string
}

const initialState: IDialogSlice = {
  open: false,
  name: '',
  errorMessage: '',
  music: null,
}

// * Set open Dialog Box
export const setOpen = createAsyncThunk<boolean, boolean>(
  'dialog/setOpen',
  async (open) => {
    return open
  }
)

// * set name
export const setName = createAsyncThunk<string, string>(
  'dialog/setName',
  async (name) => {
    return name
  }
)

// * set selected music
export const setMusic = createAsyncThunk<IMusic, IMusic>(
  'dialog/setMuisc',
  async (music) => {
    return music
  }
)

// * set error message
export const setErrorMessage = createAsyncThunk<string, string>(
  'dialog/setErrorMessage',
  async (message) => {
    return message
  }
)

// * set to default
export const setDefault = createAsyncThunk(
  'dialog/setDefault',
  async () => {
    return
  }
)

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(setOpen.fulfilled, (state, action) => {
        state.open = action.payload
      })
      .addCase(setName.fulfilled, (state, action) => {
        state.name = action.payload
      })
      .addCase(setMusic.fulfilled, (state, action) => {
        state.music = action.payload
      })
      .addCase(setErrorMessage.fulfilled, (state, action) => {
        state.errorMessage = action.payload
      })
      .addCase(setDefault.fulfilled, (state) => {
        state = initialState
      })
  },
})

export default dialogSlice.reducer
