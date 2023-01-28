import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./styles.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Nav from "./nav";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.navWraper}>
          <Link href="/login" className={classes.logo}>
            <Image src="/next.svg" alt="Logo" width={150} height={50} />
          </Link>
          <Nav />
        </div>
      </nav>
    </>
  );
};

export default Header;
