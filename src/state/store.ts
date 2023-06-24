import { configureStore, combineReducers } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import userReducer from './slice/user.slice'
import musicReducer from './slice/music.slice'
import favouriteReducer from './slice/favourite.slice'
import playlistReducer from './slice/playlist.slice'
import dialogReducer from './slice/dialog.slice'

const reducer = combineReducers({
  userState: userReducer,
  favouriteState: favouriteReducer,
  musicState: musicReducer,
  playlistState:playlistReducer,
  dialogState:dialogReducer
})

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})

// * type of Rootstate
export type RootState = ReturnType<typeof store.getState>

// * type of RootState dispatch
export type AppDispatch = typeof store.dispatch
