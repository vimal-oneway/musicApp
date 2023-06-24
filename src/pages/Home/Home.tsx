import { ImageContainer } from '../../components/ImageContainer/ImageContainer'
import { Layout } from '../../components/Layout/Layout'
import { Music } from '../../components/Music/Music'
import { Favourite } from '../../components/Favourite/Favourite'
import { PlaylistsContainer } from '../../components/Playlist/PlaylistsContainer/PlaylistsContainer'

export const Home = () => {
  return (
    <Layout>
      <ImageContainer />
      <Favourite />
      <PlaylistsContainer />
      <Music />
    </Layout>
  )
}
