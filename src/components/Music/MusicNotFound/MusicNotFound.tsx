export const MusicNotFound = () => {
  return (
    <div className="text-white flex flex-col justify-center items-center gap-3 h-[70vh] md:h-[55%] w-[80%] mx-auto md:w-auto">
      <img
        src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687540534/e6x6kidbqpil03wzo11h.png"
        alt="No music found"
        width={350}
        height={350}
      />

      <h5 className="text-xl md:text-3xl text-center md:text-start">
        Music not found,{' '}
        <span
          className="text-blue-400 underline ml-1 cursor-pointer"
          onClick={() => {
            window.location.reload()
          }}
        >
          Reload
        </span>{' '}
      </h5>
    </div>
  )
}
