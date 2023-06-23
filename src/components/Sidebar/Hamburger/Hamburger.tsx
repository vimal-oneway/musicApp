import { Dispatch, FC, SetStateAction } from "react"

type HamburgerProps = {
    setOpen: Dispatch<SetStateAction<boolean>>
    open:boolean
}
export const Hamburger : FC<HamburgerProps> = ({setOpen, open}) => {
  return (
    <section className="flex justify-between w-[100%] md:hidden items-center px-8 py-3 bg-secondary-natural-500 z-[100]">
        <img
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687512742/qctxpdqganvo4i1cnfqi.png"
          alt="Logo"
          width={50}
          height={50}
        />
        <div>
          <div
            className="flex flex-col justify-between w-[24px] h-[18px] overflow-hidden md:hidden z-20 relative"
            onClick={() => {
              setOpen((prev) => (prev = !prev))
            }}
          >
            <div
              className={`w-[100%] h-[2px] my-0.5 absolute  bg-white  duration-500 ease-in-out transition-all ${
                open ? 'top-1.5 rotate-[135deg]' : 'rotate-0'
              }`}
            ></div>
            <div
              className={`w-[100%] h-[2px] my-0.5 absolute top-1.5 bg-white duration-700  ease-in-out transition-all ${
                open ? 'left-[-60px]' : 'left-0'
              }`}
            ></div>
            <div
              className={`w-[100%] h-[2px] my-0.5 absolute  bg-white duration-500 ease-in-out transition-all ${
                open ? 'top-1.5 -rotate-[135deg]' : 'rotate-0 top-3'
              }`}
            ></div>
          </div>
        </div>
      </section>
  )
}
