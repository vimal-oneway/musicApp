import { Dispatch, FC, SetStateAction } from "react"
import { NavLinks } from "../Sidebar"
import { NavLink } from "react-router-dom"

type DropdownLinksProps = {
    navLinks:NavLinks
    setOpen:Dispatch<SetStateAction<boolean>>
}

export const DropdownLinks:FC<DropdownLinksProps> = ({navLinks, setOpen}) => {
  return (
    <section className="w-[100%] relative z-20 text-white">
      <div className=" absolute top-1 right-0 animate-slide">
        <div className=" bg-secondary-natural-500 rounded-lg py-2 px-3 mx-auto w-[100%] flex flex-col gap-3">
        {navLinks.map(({ title, path, lightImage }, index) => (
          <nav
          key={index}
          className=" transition duration-150 ease-out hover:ease-in hover:bg-secondary-400 mt-2 w-full  rounded-lg"
          >
            <NavLink
            onClick={()=>{
              setOpen(false)
            }}
              to={path}
              className={
                '  flex gap-2 items-center font-semibold text-lg py-2 px-5 w-full'
              }
              >
              <img
                width="28"
                height="28"
                src={lightImage}
                alt="home-page"
                className="ml-2"
                />
              {title}
            </NavLink>
          </nav>
        ))}
        </div>
      </div>
    </section>
  )
}
