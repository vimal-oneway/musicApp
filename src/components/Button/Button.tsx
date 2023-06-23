import { ButtonHTMLAttributes, FC, memo } from 'react'
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  children: React.ReactNode
}

export const Button: FC<IButtonProps> = memo((props) => {
  const { onClick, text, className, children, ...buttonProps } = props

  return (
    <button
      className={`bg-secondary hover:bg-secondary-400 transition-colors duration-75 px-4 py-2 rounded-md ${
        className && className
      }`}
      onClick={onClick}
      {...buttonProps}
    >
      {text || children}
    </button>
  )
})
