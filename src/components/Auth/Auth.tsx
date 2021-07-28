import { FC, useState } from 'react'
import user from '../../store/user'
import cls from './Auth.module.css'

export const Auth: FC = () => {
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  return (
    <div className={cls.container}>
      <div className={cls.group}>
        <input type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} required />
        <span className={cls.bar}></span>
        <label>Логин</label>
      </div>
      <div className={cls.group}>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className={cls.bar}></span>
        <label>Пароль</label>
      </div>
      <div className={cls.buttons}>
        <button onClick={() => user.login(login, password)}>Войти</button>
      </div>
    </div>
  )
}
