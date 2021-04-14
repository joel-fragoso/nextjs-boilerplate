import { ButtonHTMLAttributes, FC, ReactNode, useCallback } from 'react'
import { useTheme } from '../../../store/theme/hooks/useTheme'
import { Container } from './styles'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<IButtonProps> = ({ children }: IButtonProps) => {
  const { dispatch } = useTheme()

  const handleToggleThemeMode = useCallback(() => {
    dispatch({ type: 'toggleThemeMode' })
  }, [])

  return (
    <Container type="button" onClick={handleToggleThemeMode}>
      {children}
    </Container>
  )
}

export default Button
