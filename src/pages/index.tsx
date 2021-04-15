import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Home from '../modules/home/pages/Home'

const HomeRoute: FC = () => {
  return <Home />
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { type } = req.cookies

  return {
    props: {
      type: String(type),
    },
  }
}

export default HomeRoute
