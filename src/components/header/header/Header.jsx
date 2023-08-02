import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  /*========== CHANGE BACKGROUND HEADER ===========*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    // Cuando el scroll es mayor a 200 viewport height, agregar la clase scroll-header a la etiqueta con la clase header tag
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*========== DARK MODE ITEM ===========*/
  const getStorageTheme = () => {
    let theme = "light-theme";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme");
    }
    return theme;
  };

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  /*========== TOGGLE MENU ===========*/
  const [Toggle, showMenu] = useState(false);

  const [activeNav, setActiveNav] = useState("#home");
  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Dave.
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-house-user nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                onClick={() => setActiveNav("#portfolio")}
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            <li className="nav__item">
              <label className="switch-container" >
                <input type="checkbox" onClick={toggleTheme}></input>
                <span className="slider"></span>
              </label>
            </li>

            {/* <li className="nav__item">
              <a onClick={toggleTheme}>
                {theme === "light-theme" ? (
                  <i className="uil uil-moon"></i>
                ) : (
                  <i className="uil uil-brightness"></i>
                )}
              </a>
            </li> */}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
