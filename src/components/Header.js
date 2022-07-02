import React, { useEffect, useRef, useState } from "react";
// import icons
import { RiBarChartHorizontalLine, RiCloseFill } from "react-icons/ri";
// import nav data
import { nav } from "../data";
// import logo
import logo from "../assets/img/logo.svg";
import "./Header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const [bg, setBg] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // window scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 40 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      // className={`${bg ? "scrolled__header" : "scroll__without"} fixed__header `}
      className={`${
        bg ? "bg-white shadow-lg py-5" : "py-9"
      }  fixed left-0 right-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="home" className="cursor-pointer">
            <img src={logo} alt="" />
          </a>
          <ul
            className={`${
              showNav ? "left-0" : "-left-full"
            } flex flex-col justify-center items-center fixed top-0 bg-accent text-white text-xl capitalize w-80 h-full gap-y-8 duration-200 transition-all`}
          >
            {nav__links.map((item, index) => {
              return (
                <li className="cursor-pointer" key={index}>
                  <a
                    href={item.display}
                    className="transition-all duration-500"
                  >
                    {item.display}
                  </a>
                </li>
              );
            })}
          </ul>
          <div onClick={() => setShowNav(!showNav)} className="cursor-pointer">
            {showNav ? (
              <RiCloseFill className="w-8 h-8" />
            ) : (
              <RiBarChartHorizontalLine className="w-8 h-8" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /* <header
      className={`${
        bg ? "scrolled__header" : "scroll__without"
      } fixed__header `}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
         
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu">
              {nav__links.map((item, index) => (
                <a href="/" key={index}>
                  {item.display}
                </a>
              ))}
            </div>
          </div>
          <span className="mobile__menu" onClick={toggleMenu}>
            <RiBarChartHorizontalLine className="w-8 h-8" />
          </span>
        </div>
      </div>
    </header> */
}
