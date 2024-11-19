"use client";

import Link from "next/link";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { useParams, usePathname } from "next/navigation";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"} className={classes.logo}>
        <Image src={logoImg} priority />
        <p>NextLevel Food</p>
      </Link>
      <MainHeaderBackground />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink href={"/meals"}>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
