import { createAsyncThunk, createSlice, isPending } from '@reduxjs/toolkit'
import Keycloak from 'keycloak-js'
import { AppDispatch, RootState } from '../store'

import { IUser } from '../../types/user.slice.types'

const initialState: IUser = {
  token: '',
  loading: false,
  isLogin: false,
}

// * Auth the user with keycloak
export const authUser = createAsyncThunk<
  string,
  void,
  {
    state: RootState
    dispatch: AppDispatch
  }
>(
  'user/auth',
  async () => {
    // * keycloak client config
    const client = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
    })

    await client.init({
      onLoad: 'login-required',
    })
    return client.token as string
  },
  {
    condition: (_, { getState }) => {
      const { userState } = getState()
      const { token } = userState
      if (token === '') return true
      return false
    },
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.fulfilled, (state, action) => {
        state.loading = false
        state.token = action.payload
        state.isLogin = true
      })
      .addMatcher(isPending, (state) => {
        state.loading = true
      })
  },
})

export default userSlice.reducer
