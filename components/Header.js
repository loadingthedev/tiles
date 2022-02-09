import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import headerLogo from "../public/img/logo.png";
import Image from "next/image";
import Link from "next/link";
const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      mobileMenu();
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const mobileMenu = () => {
    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };

  return (
    <header className={`header ${props.extraClassName}`}>
      <div
        className={`main-header ${sticky === true ? "sticky fadeInDown" : " "}`}
      >
        <div className="main-menu-wrap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3 col-md-4 col-6">
                <div className="logo">
                  <a href="/">
                    {/* <Image src={headerLogo} alt="jironis" /> */}
                    <p style={{ fontSize: 35, marginTop: 20 }}>StickPix</p>
                  </a>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-4 col-6 menu-button">
                <div className="menu--inner-area clearfix">
                  <div className="menu-wraper">
                    <nav>
                      <div className="header-menu">
                        <div
                          id="menu-button"
                          className="menu-opened side-menu__toggler"
                        >
                          <i className="fa fa-bars"></i>
                        </div>
                        <NavLinks />
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5 d-md-block d-none">
                <div className="urgent-call text-right">
                  {/* <a href="#" className="btn">
                    Lets Go
                  </a> */}
                  <Link href="/review">
                    <a className="callActionBtn">Lets Go</a>
                  </Link>
                  <Link href="/review">
                    <a
                      className="callActionBtn"
                      style={{ paddingLeft: "0.7rem" }}
                    >
                      Login
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
