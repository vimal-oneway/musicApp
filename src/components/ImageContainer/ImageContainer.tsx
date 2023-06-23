export const ImageContainer = () => {
  return (
    <div className="bg-secondary rounded-b-lg md:rounded-tl-lg py-5 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-center px-4 text-white">
        <img
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687509009/d2vvqofqfspgpb8zgh5g.png"
          alt="woman listening to music"
          width={350}
        />
       <div className="flex md:flex-col gap-2 items-end">
       <h1 className="text-2xl md:text-4xl font-bold">
          Let's vibe
        </h1>  
        <h2 className="text-3xl md:text-5xl font-bold">
        now
        </h2>
       </div>
      </div>
    </div>
  )
}
