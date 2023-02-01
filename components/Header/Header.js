import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "./Header.module.css";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const removeClass = () => {
    setIsOpen(false);
    menuRef.current.classList.remove(`${styles.ulActive}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuRef.current.classList.toggle(`${styles.ulActive}`);
    buttonRef.current.classList.toggle(`${styles.buttonActive}`);
  };

  return (
    <nav className={styles.nav} id="nav">
      <div className={styles.left}>
        <div className={styles.logo}></div>
        <h1 className={styles.logoHeading}>CHATORA</h1>
      </div>
      <div className={styles.center}>
        <ul className={styles.ul} ref={menuRef}>
          <li className={styles.li}>
            <Link
              scroll={false}
              className={`${styles.link} ${styles.link1}`}
              href={"/#home"}
              onClick={removeClass}
            >
              HOME
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              scroll={false}
              className={styles.link}
              href={"/#about"}
              onClick={removeClass}
            >
              ABOUT
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              scroll={false}
              className={styles.link}
              href={"/#journey"}
              onClick={removeClass}
            >
              JOURNEY
            </Link>
          </li>
          <li className={styles.li}>
            <Link
              scroll={false}
              className={styles.link}
              href={"/#menu"}
              onClick={removeClass}
            >
              MENU
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.right}>
        <Link
          scroll={false}
          href={"/#contact"}
          className={styles.button}
          ref={buttonRef}
        >
          CONTACT US
        </Link>
      </div>
      <div className={styles.burger} onClick={toggleMenu}>
        <Hamburger />
      </div>
    </nav>
  );
};

export default Header;
