import { FC, useState } from 'react'
import { IPLaylist } from '../../../types/playlist.type'
import { MuiscContainerTitle } from '../../Music/MusicContainer/Title/MuiscContainerTitle'
import { MusicContainer } from '../../Music/MusicContainer/MusicContainer'

type PlaylistContianerProps = {
  playlist: IPLaylist
}

export const PlaylistContainer: FC<PlaylistContianerProps> = ({ playlist }) => {
  const [count, setCount] = useState<number>(6)
  return (
    <div key={playlist.id} className="w-[100%] pt-10">
      <MuiscContainerTitle
        title={playlist.name}
        count={count}
        setCount={setCount}
        total={playlist.tracks.length}
      />
      <MusicContainer musics={playlist.tracks} count={count} isFav={false} isPlay={true} />
    </div>
  )
}
