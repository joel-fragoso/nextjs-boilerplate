import { FC } from 'react'
import Logo from '../../../../assets/Logo'
import Button from '../../../../shared/components/elements/Button'
import { Container, Content, Title } from './styles'

const Home: FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Title>-- Boilerplate --</Title>
        <Button>Change Theme Mode</Button>
      </Content>
    </Container>
  )
}

export default Home
