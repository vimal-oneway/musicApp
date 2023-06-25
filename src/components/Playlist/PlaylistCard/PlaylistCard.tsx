import { FC } from 'react'
import { IPLaylist } from '../../../types/playlist.type'
import { useNavigate } from 'react-router-dom'

type PlaylistCardProps = {
  playlist: IPLaylist
}
export const PlaylistCard: FC<PlaylistCardProps> = ({ playlist }) => {
  const naviigate = useNavigate()
  return (
    <div
      className={`aspect-[4/3] w-[250px] md:w-[200px] lg:w-[200px] xl:w-[210px] bg-secondary-400 rounded-md px-2 py-2 flex gap-2 shadow-white md:hover:shadow-xl ease-in-out transition-shadow flex-col cursor-pointer`}
      onClick={() =>{
        naviigate(`/playlist/${playlist.id}`)
        console.log('playlist.id', playlist.id);
        
      }}
    >
      {playlist.tracks.length !== 0 && (
        <>
          <div className="w-[100%]">
            <img
              src={playlist.tracks[0].images.coverart}
              alt={playlist.name}
              width={'100%'}
              height={'100%'}
              className="rounded-lg"
            />
          </div>
          <div>
            <h4 className="text-xl">{playlist.name}</h4>
          </div>
        </>
      )}
    </div>
  )
}
