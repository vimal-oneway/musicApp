import { Layout } from '../../components/Layout/Layout'
import { PlaylistContainer } from '../../components/Playlist/PlaylistContainer/PlaylistContainer'
import { usePlaylist } from '../../hooks/usePlaylist'

export const Playlist = () => {
  const [playlist] = usePlaylist()

  return (
    <Layout>{playlist && <PlaylistContainer playlist={playlist} />}</Layout>
  )
}
