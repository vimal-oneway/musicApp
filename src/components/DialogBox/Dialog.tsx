import React, { FC, useEffect } from 'react'

type DialogProps = {
  children: React.ReactNode
  open:boolean
}

export const Dialog: FC<DialogProps> = ({ children, open }) => {

  useEffect(() => {
    const body = document.body
    const disableScroll = () => {
      body.classList.add('dialog-open')
    }

    const enableScroll = () => {
      body.classList.remove('dialog-open')
    }

    if (open) {
      disableScroll()
    } else {
      enableScroll()
    }

    // Cleanup function to re-enable scrolling when the component unmounts
    return () => {
      enableScroll()
    }
  }, [open])

  return (
    <>
      {open && (
        <div
          className="w-[100%] min-h-[100dvh] bg-secondary-natural-400 absolute top-0 left-0 z-50 flex justify-center items-center"
        >
          <div className="w-[90%] max-w-[350px] aspect-video bg-secondary rounded-lg px-5 py-5 text-white z-50">
            {children}
          </div>
        </div>
      )}
    </>
  )
}
