import { useAppSelector } from '../../../hooks/useAppSelector'
import { Button } from '../../Button/Button'
import { Input } from '../../Input/Input'
import { Dialog } from '../Dialog'
import { useDialogPlaylist } from '../../../hooks/useDialogPlaylist'

export const AddToPlaylistDialog = () => {
  const { open, errorMessage, name } = useAppSelector(
    (state) => state.dialogState
  )
  const { handleOpenDialog, handleSetPlaylistName, handleAddToPlaylist } =
    useDialogPlaylist()

  return (
    <Dialog open={open}>
      <div className="flex w-[100%] justify-between">
        <h5 className="text-2xl">Add to playlist</h5>
        <button
          className="hover:bg-secondary-400 p-2 rounded-full transition-colors"
          onClick={() => {
            handleOpenDialog(false)
          }}
        >
          <img
            width={16}
            height={16}
            src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687604438/gm7g94chpvtt69xwi6lc.png"
            alt="close"
            aria-label="close add to playlist dialog box"
          />
        </button>
      </div>
      <div className="mt-4 flex flex-col justify-center items-center gap-4">
        <div className="w-[100%]">
          <p className="mb-2">
            Enter your playlist name <span className="text-red-300">*</span>
          </p>
          <Input onChange={handleSetPlaylistName} />
          {errorMessage && <p className="text-red-300 mt-1">{errorMessage}</p>}
        </div>
        <Button
          className="bg-secondary-natural-400 w-[100%]"
          onClick={() => {
            handleAddToPlaylist()
            if (name && !errorMessage) handleOpenDialog(false)
          }}
        >
          Add to playlist
        </Button>
      </div>
    </Dialog>
  )
}
