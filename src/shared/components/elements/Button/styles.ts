import styled from 'styled-components'

export const Container = styled.button`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  border: 0;
  border-radius: 4px;
  font-size: 1.125rem;
  font-weight: 500;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`
