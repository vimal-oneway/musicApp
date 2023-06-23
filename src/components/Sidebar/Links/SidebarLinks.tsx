import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { NavLinks } from '../Sidebar'

type SidebarLinksProps = {
    navLinks:NavLinks
}

export const SidebarLinks : FC<SidebarLinksProps> = ({navLinks}) => {
  return (
    <section className="flex flex-col min-h-[70dvh] justify-between items-center">
      <div className="flex flex-col items-center">
        <img
          src="https://res.cloudinary.com/dd39ktpmz/image/upload/v1687512742/qctxpdqganvo4i1cnfqi.png"
          alt="Logo"
        />
        <h4 className="text-white font-bold text-2xl">Music app</h4>
      </div>
      <div className="flex flex-col gap-3 w-[90%]">
        {navLinks.map(({ title, path, image }, index) => (
          <nav
            key={index}
            className=" transition duration-150 ease-out hover:ease-in hover:bg-secondary-400 mt-2 w-full  rounded-lg"
          >
            <NavLink
              to={path}
              className={
                '  flex gap-2 items-center font-semibold text-lg py-2 px-5 w-full'
              }
            >
              <img
                width="28"
                height="28"
                src={image}
                alt="home-page"
                className="ml-2"
              />
              {title}
            </NavLink>
          </nav>
        ))}
      </div>
    </section>
  )
}
