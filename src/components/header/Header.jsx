import logoImg from '../../img/logo.png';
import { FaBell } from "react-icons/fa";
import style from './Header.module.css';

function Header() {
  console.log(style);

  return (
    <header className={style.header}>
      <div className={style.leftSide}>
        <img src={logoImg} alt="Logo" />
        <form className={style.searchForm}>
          <input type="text" placeholder='Search everything'/>
        </form>
      </div>

      <nav className={style.mainNavigate}>
        <a href='/' className={style.activeLink}>Projects</a>
        <a href='/' >Settings</a>
        <a href='/' >Help</a>
      </nav>

      <div className={style.rightSide}>
        <button className={style.notes}>
          <FaBell />
        </button>
      </div>
    </header>
  );
}

export default Header;
