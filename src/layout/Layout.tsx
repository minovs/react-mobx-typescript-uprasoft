import { FC, ReactChild, ReactNode } from 'react'
import Header from '../components/Header/Header'
import Futer from '../components/Futer/Futer'

export const Layout: FC<ReactNode | ReactChild> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Futer />
    </>
  )
}

export default Layout
