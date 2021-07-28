import { FC } from 'react'
import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import user from './store/user'
import Layout from './layout/Layout'
import { Main } from './containers/Main/Main'
import { Auth } from './components/Auth/Auth'

const App: FC = observer(() => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth()
    }
  }, [])
  let content = <Auth />
  if (user.isAuth)
    content = (
      <Layout>
        <Main />
      </Layout>
    )
  return <>{content}</>
})

export default App
