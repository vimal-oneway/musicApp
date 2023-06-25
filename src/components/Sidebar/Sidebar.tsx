import { useState } from 'react'
import { SidebarLinks } from './Links/SidebarLinks'
import { DropdownLinks } from './Links/DropdownLinks'
import { Hamburger } from './Hamburger/Hamburger'

export type NavLinks = { title: string; path: string; image: string ; lightImage:string}[]

const SidebarNavLinks: NavLinks = [
  {
    title: 'Home',
    path: '/home',
    image: 'https://img.icons8.com/sf-black-filled/64/home-page.png',
    lightImage: 'https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527953/tzmdmo590e8v1wtjt9hm.png'
  },
  {
    title: 'Search',
    path: '/search',
    image: 'https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/gletd7ufi2tfa7uqgmde.png',
    lightImage:'https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527879/lxa7knfzzgjtdxandsdl.png'
  },
  {
    title: 'Playlists',
    path: '/playlists',
    image: 'https://img.icons8.com/sf-black/64/playlist.png',
    lightImage:'https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/q7wvoubj9n9xfhgqqohi.png'
  },
  {
    title: 'Favourites',
    path: '/favourites',
    image: 'https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/j09ntiu8g5cy54z1iqez.png',
    lightImage:'https://res.cloudinary.com/dd39ktpmz/image/upload/v1687527518/baktiy2astx7pqvwol8a.png'
  },
]

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="md:flex items-start h-full md:min-h-[100dvh] md:bg-secondary rounded-r-lg md:fixed w-[100%] md:w-[25%] lg:w-[20%] xl:w-[15%] 2xl:w-[10%]">
      <Hamburger setOpen={setOpen} open={open} />
      <>
        <div className="hidden md:block">
          <SidebarLinks navLinks={SidebarNavLinks} />
        </div>
        <div className="block md:hidden ">
          {open && <DropdownLinks navLinks={SidebarNavLinks} setOpen={setOpen} />}
        </div>
      </>
    </div>
  )
}
