import { useEffect, useRef } from 'react'
import { useAppSelector } from './useAppSelector'
import { useAppDispatch } from './useAppDIspatch'
import { authUser } from '../state/slice/user.slice'

type UseAuthReturnType = [boolean, string | undefined]

const useAuth = (): UseAuthReturnType => {
  const isRun = useRef<boolean>(false)
  const { isLogin, token } = useAppSelector((state) => state.userState)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (isRun.current || isLogin) return
    isRun.current = true
    dispatch(authUser())
  }, [dispatch, isLogin])

  return [isLogin, token]
}

export default useAuth
