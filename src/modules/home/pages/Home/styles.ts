import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    margin-top: 2rem;
  }
`

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 1.125rem;
  font-weight: 300;
  color: ${({ theme }) => theme.palette.text.secondary};
`

export { Container, Content, Title }
