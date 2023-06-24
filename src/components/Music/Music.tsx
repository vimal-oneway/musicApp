import { FC,  useState } from 'react'
import { MusicLoading } from './MusicLoading/MusicLoading'
import { MusicNotFound } from './MusicNotFound/MusicNotFound'
import { MusicContainer } from './MusicContainer/MusicContainer'
import { MuiscContainerTitle } from './MusicContainer/Title/MuiscContainerTitle'
import { useMusic } from '../../hooks/useMusic'

export const Music: FC = () => {
  const [count, setCount] = useState<number>(6)
  const {  musics, loading, error} = useMusic()

  return (
    <div className="pt-10">
      {loading && !error && musics.length == 0 ? (
        <MusicLoading />
      ) : musics && musics.length == 0 ? (
        <MusicNotFound />
      ) : (
        <>
          <MuiscContainerTitle
            title={'Songs for you ✨'}
            total={musics.length}
            setCount={setCount}
            count={count}
          />
          <MusicContainer musics={musics} count={count} />
        </>
      )}
    </div>
  )
}
