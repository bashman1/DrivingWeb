import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import drivingSchLogo from "../img/driving-sch-logo.svg";
import UGFlag from "../img/UG-flag.svg";
import { photoAnim } from "../animation";

const Nav = () => {
  const { pathname } = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  const showNavMenuMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const hideMenu = () =>{
    setIsMobile((prev) => false);
  }
  return (
    <StyledNav>
      <Link id="logo" to="/">
        <motion.img
          variants={photoAnim}
          src={drivingSchLogo}
          alt="guy with a camera"
          onClick={hideMenu}
        />
      </Link>

      <div className={isMobile ? "mobile__menu" : "desktop__menu"}>
        <ul>
          <li>
            <Link
              style={{
                color: pathname === "/about-us" ? "#ffcc0a" : "white",
              }}
              to="/about-us"
              onClick={hideMenu}
            >
              Join Us 
            </Link>
          </li>
          <li>
            <Link
              style={{
                color: pathname === "/services" ? "#ffcc0a" : "white",
              }}
              to="/services"
              onClick={hideMenu}
            >
               <motion.img
                variants={photoAnim}
                src={UGFlag}
                alt="guy with a camera"
                onClick={hideMenu}
            />
            </Link>
          </li>
          <li>
            <Link to="/get-in-touch" className="btn_container"
          onClick={hideMenu}>
          <button className="get_in_touch">DOWNLOAD APP</button>
        </Link>
          </li>
        </ul>
      </div>

      {/* only show for mobile */}
     {!isMobile &&  <svg
        width="27"
        height="16"
        viewBox="0 0 27 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={showNavMenuMobile}
      >
        <path
          d="M25.7727 0H1.22727C0.549469 0 0 0.549469 0 1.22727C0 1.90508 0.549468 2.45455 1.22727 2.45455H25.7727C26.4505 2.45455 27 1.90508 27 1.22727C27 0.549469 26.4505 0 25.7727 0Z"
          fill="white"
        />
        <path
          d="M16.7092 6.37744H1.14796C0.513959 6.37744 0 6.8914 0 7.5254C0 8.1594 0.51396 8.67336 1.14796 8.67336H16.7092C17.3432 8.67336 17.8571 8.1594 17.8571 7.5254C17.8571 6.8914 17.3432 6.37744 16.7092 6.37744Z"
          fill="white"
        />
        <path
          d="M25.7727 12.5623H1.22727C0.549469 12.5623 0 13.1117 0 13.7895C0 14.4673 0.549468 15.0168 1.22727 15.0168H25.7727C26.4505 15.0168 27 14.4673 27 13.7895C27 13.1117 26.4505 12.5623 25.7727 12.5623Z"
          fill="white"
        />
      </svg>}

      {/* close the menu */}
      {isMobile && 
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        class="icon icon-close"
        fill="none"
        viewBox="0 0 18 17"
        onClick={showNavMenuMobile}
      >
        <path
          d="M.865 15.978a.5.5 0 00.707.707l7.433-7.431 7.579 7.282a.501.501 0 00.846-.37.5.5 0 00-.153-.351L9.712 8.546l7.417-7.416a.5.5 0 10-.707-.708L8.991 7.853 1.413.573a.5.5 0 10-.693.72l7.563 7.268-7.418 7.417z"
          fill="currentColor"
        ></path>
      </svg>}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: 0 0 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  svg {
    display: none;
  }

  #logo {
    flex: 1;

    img {
      width: 9rem;
    }
  }
  a {
    color: white;
    text-decoration: none;
    white-space: nowrap;
    display: block;
    width: 100%;
  }

  .desktop__menu {
    display: flex;
    flex: 2;

    ul {
      display: flex;
      list-style: none;
      flex: 1;
      justify-content: flex-end;
      align-items: center;

      li {
        position: relative;
      
        a{
          display: flex;
          color:#757575 !important;
        }

        img{
          border: 2px solid #f80;
          border-radius: 0.90909rem;
          width: 3rem;
        }
      }
    }
    .btn_container {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      button {
        display: inline-flex;
        padding: 1rem 2rem;
        justify-content: center;
        align-items: center;

        border-radius: 0.90909rem;
        background: #ffcc0a;
        color: #000000;
        transition: background 0.75s ease-in-out;

        &:hover {
          background: #000 !important;
          color: white;
          border: 1px solid #ffcc0a;
        }
      }
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0;
        a {
          white-space: nowrap;
          transition: all 0.75s ease-in;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem 1.5rem 0rem 0.5rem;

    svg {
      display: block;
      color: white;
      width: 2rem;
    }
    .desktop__menu {
      display: none;
    }
    .mobile__menu {
      position: absolute;
      top: 6rem;
      left: 0rem;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      background: #000000c4;
      backdrop-filter: blur(2rem);

      ul {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;

        li {
          width: 100%;
          border-bottom: 1px solid #ffcc0a17;
          padding: 1rem 0;
        }
      }

      .btn_container {
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          background-color: #ffcc0a;
          width: 89%;
        }
      }
    }
  }
`;

export default Nav;
