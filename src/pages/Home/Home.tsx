import { useEffect } from 'react'
import { ImageContainer } from '../../components/ImageContainer/ImageContainer'
import { Layout } from '../../components/Layout/Layout'
import { useMusic } from '../../hooks/useMusic'
import { Music } from '../../components/Music/Music'

export const Home = () => {
  const [getMusic] = useMusic()

  useEffect(() => {
    getMusic()
  }, [getMusic])
  
  return (
    <Layout>
      <ImageContainer />
      <Music />
    </Layout>
  )
}
