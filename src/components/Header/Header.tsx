import { FC } from 'react'
import user from '../../store/user'
import cls from './Header.module.css'

const Header: FC = () => {
  return (
    <header>
      <ul className={cls.menu}>
        <li>
          <a href="/analytics">аналитика</a>
        </li>
        <li>
          <a href="/settings">настройки</a>
        </li>
        <li id="update">
          <a href="/update">обновить</a>
        </li>
        <li>
          <a href="/logout" onClick={() => user.logout()}>
            выйти
          </a>
        </li>
      </ul>
    </header>
  )
}
export default Header
