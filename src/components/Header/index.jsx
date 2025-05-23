import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1 className="logo">
          <a href="#none" className="logo__link">
            <img src="/images/logo.svg" alt="로고" className="logo__img" />
          </a>
        </h1>  
      </div>
      <div className="header__nav">
        <nav className="nav" aria-label="메인메뉴">
          <ul className="nav__list">
            <li className="nav__item"><Link to="/" className="nav__link">WORK</Link></li>
            <li className="nav__item"><Link to="/contact" className="nav__link">CONTACT</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
