import { FC } from 'react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { PlaylistCard } from '../PlaylistCard/PlaylistCard'
import { PlaylistsNotFound } from '../PlaylistsNotFound/PlaylistsNotFound'

export const PlaylistsContainer: FC = () => {
  const { playlists } = useAppSelector((state) => state.playlistState)

  return (
    <div className="pt-10">
      {!playlists || playlists.length == 0 ? (
        <PlaylistsNotFound />
      ) : (
        <div className="text-white mb-10 md:ml-6 md:mr-8">
          <section className="flex justify-center items-center w-[100%] text-white">
            <div className="flex justify-between items-center w-[80%] md:w-[90%] lg:w-[95%] xl:w-[92%] 2xl:w-[74%]">
              <h4 className="text-xl font-semibold md:text-3xl">Playlists</h4>
            </div>
          </section>
          <div className="flex justify-center items-center flex-wrap gap-7 transition-all duration-100 mt-5">
            {playlists &&
              playlists.map((playlist, i) => (
                <PlaylistCard playlist={playlist} key={`${i}-${playlist.id}`} />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
