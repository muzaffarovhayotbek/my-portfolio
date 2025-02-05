import React from 'react';
import me from '../../assets/hayotbek.jpg';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div>
      <div className="container mx-auto px-5 max-w-screen-sm flex flex-col-reverse items-center gap-5 sm:flex-row justify-between error-container">
        <div className="error-container">
          <h2>404</h2>
          <p>Bunday sahifa mavjud emas</p>
          <a href="/" className="">
            Bosh sahifaga qaytish
          </a>
        </div>
        <img src={me} alt="" />
      </div>
    </div>
  );
}

export default ErrorPage;
