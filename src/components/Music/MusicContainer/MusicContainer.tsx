import { FC, memo } from 'react'
import { MusicCard } from '../MusicCard/MusicCard'
import { IMusic } from '../../../types/musics.types'

type IMusicContainerProps = {
  musics: IMusic[]
  count: number
  isPlay?: boolean
  isFav?:boolean
}

export const MusicContainer: FC<IMusicContainerProps> = memo(
  ({ musics,   count, isPlay=false , isFav=false}) => {
    return (
      <>
        <div className="text-white mt-10 md:ml-6 md:mr-8">
          <div className="flex justify-center items-center flex-wrap gap-7 transition-all duration-100 mt-1">
            {musics &&
              musics.slice(0, count).map((music, index) => {
                const { key, ...musicProps } = music
                return (
                  <MusicCard
                    {...musicProps}
                    isPlay={isPlay}
                    key={`${index}-${music.title}-${key}`}
                    isFav={isFav}
                  />
                )
              })}
          </div>
        </div>
      </>
    )
  }
)
