import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.facebook.com/davechbga/" className="home__social-icon" target="_blank" rel="noreferrer">
      <i className='bx bxl-facebook-circle'></i>
      </a>
      <a href="https://www.instagram.com/davechbga/" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-instagram"></i>
      </a>
      <a href="https://twitter.com/davechbga" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-twitter"></i>
      </a>
      <a href="https://github.com/davechbga" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-github"></i>
      </a>
    </div>
  );
};

export default Social;
