import { FC, InputHTMLAttributes } from "react";


type InputProps =InputHTMLAttributes<HTMLInputElement>;
export const Input:FC<InputProps> = (props) => {
  return (
    <>
      <input className="bg-secondary-natural-400 rounded-lg w-[100%] px-4 py-3 focus:outline-none border-black border-2 focus:border-gray-300" 
      {...props}
       />
    </>
  )
}
