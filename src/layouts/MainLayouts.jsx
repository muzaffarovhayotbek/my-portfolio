import React from 'react';
import './MainLayouts.css';
import { NavLink } from 'react-router-dom';

function MainLayouts({ children }) {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="my-name">
            <h1>hayotbekning portfoliosi</h1>
          </div>
          <div className="header-nav">
            <nav className="nav-list">
            <NavLink to="/" activeClassName="active">Bosh sahifa</NavLink>

              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/me">Haqimda</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="footer-content container">
          <p>Hayotbek Muzaffarov - 2025</p>
          <nav className='contant-nav'>
            <NavLink to="/social">Ijtimoiy tarmoqlar</NavLink>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default MainLayouts;
