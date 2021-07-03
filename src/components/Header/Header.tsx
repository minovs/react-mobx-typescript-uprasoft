import {FC} from 'react'
import "./Header.css";

const Header: FC = () => {
  return (
    <header>
      <div className="headContainer">
        <ul className="menu">
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
            <a href="/logout">выйти</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
