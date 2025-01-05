import React from 'react';
import me from '../../assets/hayotbek.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      <div className="my-about">
        <div className="container">
          <img src={me} alt="" width={170} height={170} />
          <h2>Hayotbek Muzaffarov</h2>
          <h4>Najot ta'lim o'quvchisi</h4>
        </div>
      </div>
    </div>
  );
}

export default Home;
