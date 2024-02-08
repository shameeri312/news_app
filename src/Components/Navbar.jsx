import React, { Component, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [icon, changeIcon] = useState("moon");

  function changeMode() {
    if (icon === "moon") {
      changeIcon("sun");
      document.body.style.backgroundColor = "rgb(31, 41, 55)";
    } else {
      changeIcon("moon");
      document.body.style.backgroundColor = "rgb(255, 255, 255)";
    }
    props.changeTheme();
  }

  let { mode, colorA } = props;
  return (
    <>
      <section
        className={`lg:h-28 md:h-32 sm:h-40 h-16 flex justify-center items-center px-5 bg-${mode} fixed top-0 w-full`}
      >
        <div className="lg:w-4/5 md:w-11/12 sm:w-full w-full flex items-center justify-between ">
          <div className="w-[20%]">
            <a hhref="#" className="flex items-center gap-2">
              <h1 className={`text-${colorA} font-bold text-2xl`}>NewsApp</h1>
              <i className={`fa-solid fa-pager text-${colorA} text-2xl`}> </i>
            </a>
          </div>

          <ul className="flex w-[60%] justify-center gap-10 flex-wrap">
            <li>
              <Link className={`text-${colorA}`} to="/business">
                Business
              </Link>
            </li>
            <li>
              <Link className={`text-${colorA}`} to="/entertain">
                Entertainment
              </Link>
            </li>
            <li>
              <Link className={`text-${colorA}`} to="/general">
                General
              </Link>
            </li>
            <li>
              <Link className={`text-${colorA}`} to="/health">
                Health
              </Link>
            </li>
            <li>
              <Link className={`text-${colorA}`} to="/science">
                Science
              </Link>
            </li>
            <li>
              <Link className={`text-${colorA}`} to="/sports">
                Sports
              </Link>
            </li>
            <li>
              <Link className={`text-${colorA}`} to="/tech">
                Technology
              </Link>
            </li>
          </ul>

          {/* <!--  navbar --> */}
          <div className="w-[20%] flex justify-end items-center gap-5 ">
            <nav>
              <ul className={`text-${colorA}`}>
                <li>
                  <button onClick={changeMode}>
                    <i className={`fa-solid fa-${icon}`}> </i>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
