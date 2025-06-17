import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__logo">
        <h1 className="logo">
          <Link to="/" className="logo__link" data-hover="true">
            <img src="/images/logo.svg" alt="로고" className="logo__img" />
          </Link>
        </h1>
      </div>
      <div className="header__nav">
        <nav className="nav" aria-label="메인메뉴">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link" data-hover="true">
                WORK
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link" data-hover="true">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* 모바일 메뉴 */}
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="btn-gnbmo" aria-label="모바일 메뉴 열기"></button>

      <div className={`gnbmo ${isOpen ? 'open' : ''}`}>
        <button
          className="gnbmo__close"
          aria-label="모바일 메뉴 닫기"
          onClick={() => setIsOpen(false)}
        ></button>
        <nav className="gnbmo__nav" aria-label="모바일메뉴">
          <ul className="gnbmo__list">
            <li className="gnbmo__item">
              <Link to="/" className="gnbmo__link" onClick={() => setIsOpen(false)}>
                WORK
              </Link>
            </li>
            <li className="gnbmo__item">
              <Link to="/contact" className="gnbmo__link" onClick={() => setIsOpen(false)}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
