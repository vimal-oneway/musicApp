import { Action } from "redux"

export interface RejectedAction extends Action {
  payload: boolean
}

export type RejectedValue = {
  error: boolean
}
