export const HoverButton = () => {
  return (
    <div className="md:absolute md:top-0 md:right-[-0%] h-[100%] bg-secondary-400 md:bg-secondary-natural-500 md:z-10 pt-3 pb-2 md:pt-2 md:pb-2  px-2 rounded-md md:rounded-r-md flex md:flex-col gap-2 w-[100%] md:w-auto">
      <button className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg  overflow-hidden items-center">
        <img
          width="28"
          height="28"
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/baktiy2astx7pqvwol8a.png"
          alt="add-to-favorites"
        />
      </button>
      <button className="bg-secondary p-3 w-[100%] md:w-auto flex justify-center rounded-lg overflow-hidden items-center">
        <img
          width="28"
          height="28"
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/q7wvoubj9n9xfhgqqohi.png"
          alt="playlist"
        />
      </button>
    </div>
  )
}
