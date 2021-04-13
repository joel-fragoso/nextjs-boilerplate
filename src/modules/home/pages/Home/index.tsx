import { FC } from 'react'
import Logo from '../../../../assets/Logo'
import { Container, Content, Title } from './styles'

const Home: FC = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Title>-- Boilerplate --</Title>
      </Content>
    </Container>
  )
}

export default Home
