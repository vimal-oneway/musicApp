import { FavouriteNotFound } from './FavouriteNotFound/FavouriteNotFound'
import { MusicContainer } from '../Music/MusicContainer/MusicContainer'
import { useAppSelector } from '../../hooks/useAppSelector'
import { useState } from 'react'
import { MuiscContainerTitle } from '../Music/MusicContainer/Title/MuiscContainerTitle'

export const Favourite = () => {
    const { musics } = useAppSelector((state) => state.favouriteState)
    const [count,setCount] = useState<number>(6)
  
    return (
      <div className="pt-10">
        { !musics || musics.length == 0 ? (
          <FavouriteNotFound />
        ) : (
          <>
          <MuiscContainerTitle title='favourite' count={count} setCount={setCount} total={musics.length}/>
            <MusicContainer musics={musics} count={count} isPlay={true} isFav={true} />
          </>
        )}
      </div>
    )
}
