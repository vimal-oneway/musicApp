import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks/useAppSelector'
import useAuth from '../../hooks/useAuth'
import { useEffect } from 'react'

export const Login = () => {
  useAuth()
  const { isLogin } = useAppSelector((state) => state.userState)

  const navigate = useNavigate()

  useEffect(() => {
    if (isLogin) {
      navigate('/home')
    }
  }, [isLogin, navigate])
  
  return <div>Login</div>
}
