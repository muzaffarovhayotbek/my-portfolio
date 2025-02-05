import React from 'react';
import './MainLayouts.css';
import { NavLink } from 'react-router-dom';

function MainLayouts({ children }) {
  return (
    <div>
      <header className="header h-full">
        <div className="container header__container">
          <div className="my-name">
            <h1>hayotbekning portfoliosi</h1>
          </div>
          <div className="header-nav">
            <nav className="nav-list">
              <NavLink to="/" activeClassName="active">
                Bosh sahifa
              </NavLink>

              <NavLink to="/me">Haqimda</NavLink>
              <NavLink to="*">Loyihalar</NavLink>

              <NavLink to="/blog">Blog</NavLink>
            </nav>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer>
        <div className="footer-content container">
          <h2>Hayotbek Muzaffarov</h2>
        </div>
      </footer>
    </div>
  );
}

export default MainLayouts;
