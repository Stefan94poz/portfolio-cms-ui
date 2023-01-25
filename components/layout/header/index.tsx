import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Nav from "./nav";

const Header = () => {
  return (
    <>
      <nav className={classes.nav}>
        <Link href="/login" className={classes.logo}>
          <img src="/next.svg" alt="Logo" />
        </Link>
        <Nav />
      </nav>
    </>
  );
};

export default Header;
