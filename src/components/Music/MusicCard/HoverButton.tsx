import { FC, memo } from 'react'
import { IMusic } from '../../../types/musics.types'
import { useFavourite } from '../../../hooks/useFavourite'
import { useDialogPlaylist } from '../../../hooks/useDialogPlaylist'
import { useParams } from 'react-router-dom'

type HoverButtonProps = {
  isPlay: boolean
  music: IMusic
  isFav: boolean
}

export const HoverButton: FC<HoverButtonProps> = memo(
  ({ isPlay, music, isFav }) => {
    const [handleFavouriteEvents] = useFavourite()
    const { handleOpenDialog, handleSetMusic, handleDeleteMusicFormPlaylists } =
      useDialogPlaylist()
    const { id } = useParams()

    return (
      <div className="md:absolute md:top-0 md:right-[-0%] h-[100%] bg-secondary-400 md:bg-secondary-natural-500 md:z-10 pt-3 pb-2 md:pt-2 md:pb-2  px-2 rounded-md md:rounded-r-md flex md:flex-col gap-2 w-[100%] md:w-auto">
        {!isPlay ? (
          <>
            <button
              aria-label="add to favourite"
              className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg  overflow-hidden items-center"
              onClick={() => handleFavouriteEvents(music, true)}
            >
              <img
                width="28"
                height="28"
                src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687585008/givqa0oeu2dt616upsm6.png"
                alt="add-to-favorites"
              />
            </button>
            <button
              aria-label="add to playlist"
              className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg overflow-hidden items-center"
              onClick={() => {
                handleOpenDialog(true)
                handleSetMusic(music)
              }}
            >
              <img
                width="28"
                height="28"
                src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/q7wvoubj9n9xfhgqqohi.png"
                alt="playlist"
              />
            </button>
          </>
        ) : isFav ? (
          <>
            <button
              aria-label="remove form Favourite"
              className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg overflow-hidden items-center"
              onClick={() => handleFavouriteEvents(music, false)}
            >
              <img
                width="28"
                height="28"
                src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/baktiy2astx7pqvwol8a.png"
                alt="playlist"
              />
            </button>
            <button
              aria-label="play music"
              className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg  overflow-hidden items-center"
              onClick={() => window.open(music.url)}
            >
              <img
                width="28"
                height="28"
                src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687584691/uo1dvqjjwslixkacwozo.png"
                alt="Play music"
              />
            </button>
          </>
        ) : (
          <>
            <button
              aria-label="remove form Favourite"
              className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg overflow-hidden items-center"
              onClick={() => {
                id && handleDeleteMusicFormPlaylists(id, music.url)
              }}
            >
             <img width="28" height="28" src="https://img.icons8.com/material-outlined/24/FFFFFF/filled-trash.png" alt="filled-trash"/>
            </button>
            <button
              aria-label="play music"
              className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg  overflow-hidden items-center"
              onClick={() => window.open(music.url)}
            >
              <img
                width="28"
                height="28"
                src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687584691/uo1dvqjjwslixkacwozo.png"
                alt="Play music"
              />
            </button>
          </>
        )}
      </div>
    )
  }
)
