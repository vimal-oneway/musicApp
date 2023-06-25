import { Layout } from '../../components/Layout/Layout'
import { PlaylistContainer } from '../../components/Playlist/PlaylistContainer/PlaylistContainer'
import { PlaylistsContainer } from '../../components/Playlist/PlaylistsContainer/PlaylistsContainer'
import { usePlaylist } from '../../hooks/usePlaylist'

export const Playlist = () => {
  const { playlist, playlists } = usePlaylist()

  return (
    <Layout>
      {playlist && <PlaylistContainer playlist={playlist} />}
      <PlaylistsContainer givenPlaylists={playlists} />
    </Layout>
  )
}
