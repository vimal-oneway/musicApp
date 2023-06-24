import { MuiscContainerTitle } from "../MusicContainer/Title/MuiscContainerTitle"

export const MusicLoading = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3 h-[70vh] md:h-[55%] mb-10">
      <MuiscContainerTitle title={"Songs for you ✨"}/>
      <img src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687540234/yrty6fw8dpwnjhnqfj7z.png" alt="Loading music" width={250} height={250} />
      <h5 className="text-2xl">Loading musics for you</h5>
    </div>
  )
}
