import { IMusic } from './musics.types'

export interface IPLaylist {
  id: string
  tracks: IMusic[]
  name: string
}

export type IPlayListArray = IPLaylist[]

export type IPlayListState = {
  loading: boolean
  playlist: IPlayListArray
  error: boolean
}
