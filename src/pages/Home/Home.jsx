import React from 'react';
import me from '../../assets/hayotbek.jpg';
import './Home.css';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="container home__container">
        <div className="home-left">
          <img src={me} alt="me photo" width={170} height={170} />
          <div className="home-title">
            <h2 className="text-2xl font-medium mb-1 sm:text-4xl">
              Muzaffarov Hayotbek
            </h2>
            <h4 className="text-slate-500 text-lg font-medium mb-2 sm:text-2xl">
              Najot ta'lim o'quvchisi
            </h4>
          </div>
        </div>
        <div className="home-buttons">
          <button className="first-btn">
            <NavLink to="/blog">Blog</NavLink>
          </button>
          <button className="two-btn">
            <NavLink to="/me">Haqimda</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
