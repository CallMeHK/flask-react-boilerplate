import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../helpers/useWindowSize";

export default function Toolbar(props) {
  const [slider, setSlider] = useState(false);
  const size = useWindowSize();
  return (
    <>
      <nav className="navbar-theme">
        <a
        style={{ cursor:"pointer" }}
          className="sidenav-trigger"
          onClick={() => setSlider(s => !s)}
        >
          <i className="material-icons">menu</i>
        </a>
      </nav>
      <div
        className="sidenav-overlay"
        onClick={() => setSlider(s => !s)}
        style={{
          display: slider && size.width < 980 ? "block" : "none",
          opacity: "1",
        }}
      />
      <ul
        id="slide-out"
        className="sidenav"
        style={{
          transform: slider || size.width > 980 ? "translateX(0%)" : "",
          transitionProperty: "transform",
          transitionDuration: ".25s"
        }}
      >
        <li>
          <h4>{props.title}</h4>
        </li>
        {props.paths.map((elt,i) => (
          <li onClick={() => setSlider(s => !s)} key={`path-${elt}-${i}`}>
            <Link className="waves-effect" to={elt.path}>
              {elt.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
