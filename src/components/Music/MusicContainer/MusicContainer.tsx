import { FC, memo, useState } from 'react'
import { MusicCard } from '../MusicCard/MusicCard'
import { IMusic } from '../../../types/musics.types'
import { Button } from '../../Button/Button'

type IMusicContainerProps = {
  musics: IMusic[]
  title: string
}

export const MusicContainer: FC<IMusicContainerProps> = memo(
  ({ musics, title }) => {
    const [count, setCount] = useState<number>(6)
    return (
      <>
        <div className=" text-white md:ml-6 md:mr-8">
          <section className="flex justify-between items-start h-full pb-5">
            <h4 className="text-2xl md:text-3xl mb-5">{title}</h4>
            <Button
              onClick={() => {
                setCount(count === musics.length ? 6 : musics.length)
              }}
            >
              {count === musics.length ? 'Show less' : 'Show more'}
            </Button>
          </section>
          <div className="flex justify-center flex-wrap gap-7 transition-all duration-100">
            {musics &&
              musics.slice(0, count).map((music, index) => {
                const { key, ...musicProps } = music
                return (
                  <MusicCard
                    {...musicProps}
                    key={`${index}-${music.title}-${key}`}
                  />
                )
              })}
          </div>
        </div>
      </>
    )
  }
)
