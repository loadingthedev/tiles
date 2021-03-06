import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";
import { LoginUserAtom } from "../lib/recoil-atoms";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  const [user, setUser] = useRecoilState(LoginUserAtom);
  const logout = () => {
    setUser(null);
  };
  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#" className="side-menu__toggler side-menu__close-btn">
            <i className="fa fa-times"></i>
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          {/* <p>
            Lorem Ipsum is simply dummy text the printing and setting industry.
            Lorm Ipsum has been the industry's stanard dummy text ever.
          </p> */}
          <div className="">
            {!user ? (
              <>
                <Link href="/signin">
                  <button className="btn mx-2" id="mobileBtn">
                    Login
                  </button>
                </Link>
                <Link href="/signup">
                  <button className="btn" id="mobileBtn">
                    Signup
                  </button>
                </Link>
              </>
            ) : (
              <button className="btn" id="mobileBtn" onClick={logout}>
                Logout
              </button>
            )}
          </div>
          <p>
            <a href="mailto:contact@stickpix.com">contact@stickpix.com</a>{" "}
            <br />
            {/* <a href="tel:888-999-0000">888 999 0000</a> */}
          </p>
          <div className="side-menu__social">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
