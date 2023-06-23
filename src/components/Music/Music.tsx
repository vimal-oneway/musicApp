import { FC } from 'react'
import { useAppSelector } from './../../hooks/useAppSelector'
import { MusicLoading } from './MusicLoading/MusicLoading'
import { MusicNotFound } from './MusicNotFound/MusicNotFound'
import { MusicContainer } from './MusicContainer/MusicContainer'

export const  Music: FC = () => {
  const { musics, loading, error } = useAppSelector((state) => state.musicState)

  console.log(loading,'loading', error, 'error');
  

  return (
    <div className='pt-10'>
      {loading && !error ? (
        <MusicLoading />
      ) : musics && musics.length == 0 ? (
        <MusicNotFound />
       ) : (
         <MusicContainer musics={musics} title='Recommendation' />
       )}
    </div>
  )
}
