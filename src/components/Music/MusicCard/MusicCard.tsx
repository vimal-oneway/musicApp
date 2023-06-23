import { FC, useState } from 'react'
import { IMusic } from '../../../types/musics.types'
import { HoverButton } from './HoverButton'
import { InfoCard } from './InfoCard'

export const MusicCard: FC<IMusic> = ({ title, subtitle, images }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div
    className='md:relative'
      onMouseOver={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <InfoCard coverart={images.coverart} title={title} subtitle={subtitle} />
      <section>
        <div className="block md:hidden -mt-2.5">
          <HoverButton/>
        </div>
        <div className="hidden md:block">{open && <HoverButton />}</div>
      </section>
    </div>
  )
}
