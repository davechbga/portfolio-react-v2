import React from "react";
import "./scrollup.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = document.querySelector(".scrollup");

    // Cuando el scroll es mayor a 560 viewport height, agregar la clase show-scroll a la etiqueta con la clase scrollup
    if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
  });
  return (
    <div className="scrollup">
    <a href="#" >
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
    </div>
  );
};

export default ScrollUp;
