import { ButtonHTMLAttributes, FC, memo } from 'react'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  children: React.ReactNode
}

export const Button: FC<IButtonProps> = memo((props) => {
  const { onClick, text, className, children, ...buttonProps } = props

  return (
    <button
      className={`bg-secondary hover:bg-secondary-400 transition-colors duration-75 px-2 py-1 text-sm md:text-md md:px-4 md:py-2 rounded-md ${
        className && className
      }`}
      onClick={onClick}
      {...buttonProps}
    >
      {text || children}
    </button>
  )
})
