import { useState } from "react";
import { close, logo, menu } from "../../assets";
import { navLinks } from "../../constants";
import { Link, useLocation } from "react-router-dom";
import Button from "../welcome/Button";
import { Outlet } from "react-router-dom";
import styles from "../../style";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/ibanban";
  const isMap = pathname === "/ibanban/map";
  const tabNames = ["Review", "Games"];

  const getNav = () => {
    if (isHome) {
      return (
        <>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <Link to="/ibanban/map">
            <Button
              styles={"text-[12px] px-1.5 py-0.5 ml-10 sm:block hidden"}
            />
          </Link>
        </>
      );
    } else if (isMap) {
      return null;
    } else {
      return (
        <>
          <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {tabNames.map((name, index) => {
              const splitLocation = pathname.split("/");
              splitLocation[4] = name.toLowerCase();
              const finalRoute = splitLocation.slice(0, 5).join("/");
              return (
                <li
                  key={name}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    active === name ? "text-white" : "text-dimWhite"
                  } ${index === tabNames.length - 1 ? "mr-0" : "mr-10"}`}
                  onClick={() => setActive(name)}
                >
                  <Link to={finalRoute}>{name}</Link>
                </li>
              );
            })}
          </ul>
          <Link to="/ibanban/map" onClick={() => setActive("Review")}>
            <Button
              styles={"text-[12px] px-1.5 py-0.5 ml-10 sm:block hidden"}
              text="Map"
            />
          </Link>
        </>
      );
    }
  };

  return (
    <>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} sticky absolute top-0 bg-primary z-[7]`}
      >
        <div className={`${styles.boxWidth} bg-primary`}>
          <nav className="w-full flex py-6 justify-between items-center navbar">
            <Link to="/ibanban">
              <img src={logo} alt="Ibanban" className="w-[135px] h-[48px]" />
            </Link>
            {getNav()}
            <div className="sm:hidden flex flex-1 justify-end items-center">
              <Link to="/ibanban/map">
                <Button
                  styles={"text-[12px] px-1.5 py-0.5 mr-5 sm:hidden block"}
                />
              </Link>
              <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[28px] h-[28px] object-contain cursor-pointer"
                onClick={() => setToggle(!toggle)}
              />

              <div
                className={`${
                  !toggle ? "hidden" : "flex"
                } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-white" : "text-dimWhite"
                      } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                      onClick={() => setActive(nav.title)}
                    >
                      <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
