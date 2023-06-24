import { useNavigate } from 'react-router-dom'
import { MuiscContainerTitle } from '../../Music/MusicContainer/Title/MuiscContainerTitle'

export const FavouriteNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3 h-full md:h-[55%]">
      <MuiscContainerTitle title="Favourite" />
      <div className="w-[250px] md:w-[350px] mt-5">
        <img
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687578864/dsez9uuiqgkva9t9pzh6.png"
          alt="No music found"
          width={'100%'}
          height={'100%'}
        />
      </div>

      <h5 className="text-xl md:text-3xl text-center md:text-start mt-3 w-[70%] md:w-auto">
        Your Favourite list is empty,{' '}
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
