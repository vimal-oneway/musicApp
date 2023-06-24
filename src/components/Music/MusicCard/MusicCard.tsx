import { FC, memo, useState } from 'react'
import { IMusic } from '../../../types/musics.types'
import { HoverButton } from './HoverButton'
import { InfoCard } from './InfoCard'

type IMusicCardProps = {
  isPlay: boolean
  isFav:boolean
} & IMusic

export const MusicCard: FC<IMusicCardProps> = memo((music) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      {music.images && (
        <div
          className="md:relative"
          onMouseOver={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <InfoCard
            coverart={music.images.coverart}
            title={music.title}
            subtitle={music.subtitle}
          />
          <section>
            <div className="block md:hidden -mt-2.5">
              <HoverButton isPlay={music.isPlay} music={music} isFav={music.isFav} />
            </div>
            <div className="hidden md:block">
              {open && <HoverButton isPlay={music.isPlay} music={music} isFav={music.isFav} />}
            </div>
          </section>
        </div>
      )}
    </>
  )
})
