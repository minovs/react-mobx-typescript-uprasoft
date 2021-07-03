import { FC } from 'react'
import Layout from './layout/Layout'
import { Main } from './containers/Main/Main'

const App: FC = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default App
