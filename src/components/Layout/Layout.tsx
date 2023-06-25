import { FC } from 'react'
import { Sidebar } from '../Sidebar/Sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <nav className="flex flex-col md:flex-row w-[100%] md:px-0 md:gap-3 bg-primary">
      <div className=" w-[100%] md:w-[25%] lg:w-[20%] xl:w-[15%] 2xl:w-[10%]">
        <Sidebar />
      </div>
      <div className="w-[100%] md:w-[75%] lg:w-[80%] xl:w-[85%] 2xl:w-[90%] mt-16 md:mt-0">{children}</div>
    </nav>
  )
}
