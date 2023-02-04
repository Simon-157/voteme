import React from "react";
import Link from "next/link";

import navStyles from "./navbar.module.scss";
import Image from "next/image";
import ElectionSvg from "../svg-icons/ElectionSvg";
const NavBar = () => {
  return (
    <nav>
      <div className={navStyles.navContainer}>
        <ul className={navStyles.navItems}>
          <Link href="/">
            <ElectionSvg viewBox="0 0 28 28" width="28" height="28" />
          </Link>
          <span>E-Cast</span>
          <li className={navStyles.navItem}>
            <Link href="/">Events</Link>
          </li>
          <li className={navStyles.navItem}>
            <Link href="/about">Reviews</Link>
          </li>
          <li className={navStyles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
