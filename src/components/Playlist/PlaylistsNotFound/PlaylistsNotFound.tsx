import { useNavigate } from "react-router-dom"

export const PlaylistsNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3 h-full md:h-[55%] mb-10">
      <section className="flex justify-center items-center w-[100%] text-white">
        <div className="flex justify-between items-center w-[80%] md:w-[90%] lg:w-[95%] xl:w-[92%] 2xl:w-[74%]">
          <h4 className="text-xl font-semibold md:text-3xl">Playlists</h4>
        </div>
      </section>
      <div className="w-[250px] md:w-[350px] mt-5">
        <img
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687592966/djaiqyaly7cyq2ut5iut.png"
          alt="No music found"
          width={'100%'}
          height={'100%'}
        />
      </div>

      <h5 className="text-xl md:text-3xl text-center md:text-start mt-3 w-[70%] md:w-auto">
        Your Playlist is empty,{' '}
        <span
          className="text-blue-400 underline ml-1 cursor-pointer"
          onClick={() => {
            navigate('/search')
          }}
        >
          Add
        </span>{' '}
      </h5>
    </div>
  )
}
