import './App.css'

import  { useState,lazy } from 'react'
import useAuth from './hooks/useAuth'

const Login = lazy(() => import('./components/Login'))
const Home = lazy(() => import('./components/Home '))


function App() {

const [isLogin]  = useAuth()

  return (
    <>
       {
        isLogin ? 
        <Home/> :
        <Login/>
       }
    </>
  )
}

export default App
