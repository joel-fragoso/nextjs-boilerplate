import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { useTheme } from '../../../store/theme/hooks/useTheme'
import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<IButtonProps> = ({ children }: IButtonProps) => {
  const { dispatch } = useTheme()

  return (
    <Container
      type="button"
      onClick={() => dispatch({ type: 'toggleThemeMode' })}
    >
      {children}
    </Container>
  )
}

export default Button
